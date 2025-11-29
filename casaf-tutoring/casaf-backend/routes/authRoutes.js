// routes/authRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const router = express.Router();
const nodemailer = require("nodemailer");

// --- EMAIL SENDER (configure with your SMTP / Gmail app password) ---
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// helper to create JWT
const createToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

// helper to send verification link
const sendVerificationEmail = async (user, origin) => {
  const verifyUrl = `${origin}/verify-email?token=${user.verificationToken}&email=${user.email}`;
  await transporter.sendMail({
    from: `"CASAF Tutors" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "Verify your CASAF Tutors account",
    html: `<p>Hi ${user.name},</p>
           <p>Thank you for registering. Click the link below to verify your email:</p>
           <a href="${verifyUrl}">${verifyUrl}</a>`
  });
};

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      name,
      email,
      password: hashed,
      role: role || "tuition_client",
      verificationToken,
    });

    const origin = req.headers.origin || process.env.FRONTEND_URL;
    await sendVerificationEmail(user, origin);

    res.status(201).json({
      message: "Registered successfully. Check your email to verify account.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// VERIFY EMAIL
router.get("/verify-email", async (req, res) => {
  const { token, email } = req.query;
  try {
    const user = await User.findOne({ email, verificationToken: token });
    if (!user) return res.status(400).json({ message: "Invalid token" });

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.json({ message: "Email verified successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password, type } = req.body; // type: "tuition" or "consultancy"
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "No account found with that email." });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Incorrect password." });

    if (!user.isVerified)
      return res.status(403).json({ message: "Please verify your email first." });

    // optional: check role vs login type if you want
    // e.g., if (type === "tuition" && user.role !== "tuition_client") ...

    const token = createToken(user._id);

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false, // true in production with HTTPS
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: "Logged in successfully",
        user: { id: user._id, name: user.name, role: user.role, email: user.email },
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
});

// FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(200).json({ message: "If account exists, email sent." });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const origin = req.headers.origin || process.env.FRONTEND_URL;
    const resetUrl = `${origin}/reset-password?token=${resetToken}&email=${user.email}`;

    await transporter.sendMail({
      from: `"CASAF Tutors" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Reset your CASAF password",
      html: `<p>Click the link below to reset your password:</p>
             <a href="${resetUrl}">${resetUrl}</a>`,
    });

    res.json({ message: "If account exists, reset email sent." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// RESET PASSWORD
router.post("/reset-password", async (req, res) => {
  const { email, token, password } = req.body;
  try {
    const user = await User.findOne({
      email,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired reset token" });

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// WHOAMI (for protected front-end)
router.get("/me", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Not logged in" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(401).json({ message: "Token invalid or expired" });
  }
});

module.exports = router;