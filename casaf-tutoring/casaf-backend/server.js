const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const authRoutes = require("./routes/authRoutes");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());

// ★ FRONTEND URLs allowed
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,        // local frontend
  process.env.PROD_FRONTEND_URL,   // vercel frontend prod
  "https://casafcameroon-tutoring.vercel.app", // exact URL shown in your screenshot
];

// ★ CORS FIX (100% Works With Vercel, Railway, Render)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// ★ PREVENT PREFLIGHT FAILURE
app.options("*", cors());

// ★ GLOBAL HEADERS FIX (For Vercel)
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("CASAF API running");
});

// ROUTES
app.use("/api/auth", authRoutes);

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✔ Server running on port ${PORT}`));