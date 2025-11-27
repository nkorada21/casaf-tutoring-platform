const express = require("express");
const TutorProfile = require("../models/TutorProfile");
const auth = require("../middleware/auth");

const router = express.Router();

// POST /api/tutors/apply - tutor application
router.post("/apply", auth(), async (req, res) => {
  try {
    const { subjects, levels, bio, location, hourlyRate } = req.body;
    const profile = await TutorProfile.create({
      user: req.user.userId,
      subjects,
      levels,
      bio,
      location,
      hourlyRate
    });
    res.status(201).json(profile);
  } catch (err) {
    console.error("Tutor apply error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/tutors/public - list approved tutors (for homepage)
router.get("/public", async (req, res) => {
  try {
    const tutors = await TutorProfile.find({ vettingStatus: "approved" })
      .populate("user", "name")
      .limit(6);
    res.json(tutors);
  } catch (err) {
    console.error("Get public tutors error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;