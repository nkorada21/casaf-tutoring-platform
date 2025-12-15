// routes/authRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const nodemailer = require("nodemailer");

const router = express.Router();

/* -------------------------------------------
   EMAIL TRANSPORTER
-------------------------------------------- */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

/* -------------------------------------------
   JWT CREATOR
-------------------------------------------- */
const createToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

/* -------------------------------------------
   SEND VERIFICATION EMAIL
-------------------------------------------- */
const sendVerificationEmail = async (user) => {
  const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?token=${user.verificationToken}&email=${user.email}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,     // FIX 1
    to: user.email,
    subject: "Verify your CASAF Tutors account",
    html: `
      <p>Hi ${user.name},</p>
      <p>Thank you for registering. Click the link below to verify your email:</p>
      <a href="${verifyUrl}">${verifyUrl}</a>
    `,
  });
};

/* -------------------------------------------
   REGISTER
-------------------------------------------- */
router.post("/register", async (req, res) => {
  console.log("headers content-type:", req.headers["content-type"]);
  console.log("body:", req.body);
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "tuition_client",
      verificationToken,
      // enable this for development (auto verify)
      isVerified: true,
    });

    const origin = req.headers.origin || process.env.FRONTEND_URL;

    // DO NOT break signup if email failing
    try {
      await sendVerificationEmail(user);
    } catch (emailErr) {
      console.error("Email sending error:", emailErr);
    }

    res.status(201).json({
      message:
        "Registered successfully! Please check your email to verify the account.",
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});



/* -------------------------------------------
   VERIFY EMAIL
-------------------------------------------- */
// VERIFY EMAIL
router.get("/verify-email", async (req, res) => {
  const { token, email } = req.query;

  try {
    if (!token || !email) {
      return res.status(400).json({ message: "Invalid link" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.verificationToken !== token) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // UPDATE USER
    user.isVerified = true;
    user.verificationToken = ""; // IMPORTANT
    await user.save({ validateBeforeSave: false });

    res.json({ message: "Email verified successfully. You may now log in." });

  } catch (err) {
    console.error("Verification error:", err);
    res.status(500).json({ message: "Server error during verification" });
  }
});

/* -------------------------------------------
   LOGIN
-------------------------------------------- */
router.post("/login", async (req, res) => {
  try {
    const { email, password, type } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "No account found with this email." });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Incorrect password." });

    // Uncomment when email verification fully works
    if (!user.isVerified) {
      return res.status(403).json({
        message: "Please verify your email before logging in."
  });
}

    const token = createToken(user._id);

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: "Logged in successfully",
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
          email: user.email,
        },
      });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* -------------------------------------------
   LOGOUT
-------------------------------------------- */
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
});

/* -------------------------------------------
   FORGOT PASSWORD
-------------------------------------------- */
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(200).json({ message: "If account exists, email sent." });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const origin = req.headers.origin || process.env.FRONTEND_URL;
    const resetUrl = `${origin}/reset-password?token=${resetToken}&email=${user.email}`;

    try {
      await transporter.sendMail({
        from: `"CASAF Tutors" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: "Reset your password",
        html: `<p>Click the link to reset password:</p>
               <a href="${resetUrl}">${resetUrl}</a>`,
      });
    } catch (emailErr) {}

    res.json({ message: "If account exists, reset email sent." });
  } catch (err) {
    console.error("FORGOT ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* -------------------------------------------
   RESET PASSWORD
-------------------------------------------- */
router.post("/reset-password", async (req, res) => {
  try {
    const { email, token, password } = req.body;

    const user = await User.findOne({
      email,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({
        message: "Invalid or expired reset token",
      });

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (err) {
    console.error("RESET ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* -------------------------------------------
   WHO AM I
-------------------------------------------- */
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