const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["tuition_client", "consultancy_client", "tutor", "admin"],
      default: "tuition_client",
    },

    isVerified: { type: Boolean, default: false },
    verificationToken: String,

    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);