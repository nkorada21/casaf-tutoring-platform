const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    email: { type: String, required: true },
    level: { type: String, required: true },
    subject: { type: String, required: true },
    mode: { type: String, enum: ["online", "in_person", "hybrid"], default: "online" },
    details: { type: String },
    status: {
      type: String,
      enum: ["pending", "matching_tutor", "tutor_assigned", "completed", "closed"],
      default: "pending"
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);