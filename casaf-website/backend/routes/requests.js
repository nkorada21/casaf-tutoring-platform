const express = require("express");
const Request = require("../models/Request");
const auth = require("../middleware/auth");

const router = express.Router();

// POST /api/requests - create a tutoring request (public or logged-in)
router.post("/", async (req, res) => {
  try {
    const { studentName, email, level, subject, mode, details } = req.body;
    if (!studentName || !email || !level || !subject) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const createdBy = req.user ? req.user.userId : undefined;

    const request = await Request.create({
      studentName,
      email,
      level,
      subject,
      mode,
      details,
      createdBy
    });

    res.status(201).json(request);
  } catch (err) {
    console.error("Create request error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/requests/my - student view their own requests
router.get("/my", auth(["student"]), async (req, res) => {
  try {
    const requests = await Request.find({ createdBy: req.user.userId }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    console.error("Get my requests error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;