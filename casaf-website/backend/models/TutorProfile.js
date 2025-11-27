const mongoose = require("mongoose");

const tutorProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    subjects: [{ type: String }],
    levels: [{ type: String }], // e.g. "Primary", "Secondary", "Undergraduate"
    bio: { type: String },
    location: { type: String },
    hourlyRate: { type: Number },
    vettingStatus: {
      type: String,
      enum: ["applied", "under_review", "approved", "rejected"],
      default: "applied"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("TutorProfile", tutorProfileSchema);