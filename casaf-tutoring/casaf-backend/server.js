const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Correct CORS configuration
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,       // http://localhost:5173
      process.env.PROD_FRONTEND_URL,  // https://casaf-tutoring.vercel.app
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

// Test route
app.get("/", (req, res) => {
  res.send("CASAF API running");
});

// Routes
app.use("/api/auth", authRoutes);

// Required for Render / Railway
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✔ Server running on port ${PORT}`);
});