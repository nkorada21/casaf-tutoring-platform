// server.js
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const authRoutes = require("./routes/authRoutes");

const app = express();

// FRONTEND URL (Vercel)
const FRONTEND = process.env.FRONTEND_URL || "https://casaf-tutoring.vercel.app";

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: FRONTEND,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("CASAF API running");
});

// AUTH ROUTES
app.use("/api/auth", authRoutes);

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);