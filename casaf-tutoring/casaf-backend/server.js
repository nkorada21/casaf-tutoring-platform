const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
connectDB();

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());

// FRONTEND URLs allowed
const allowedOrigins = [
  process.env.FRONTEND_URL,        // local frontend
  process.env.PROD_FRONTEND_URL,   // vercel frontend prod
];

// CORS FIX
const corsOptions = {
  origin: (origin, cb) => {
    if (!origin) return cb(null, true); // allows Postman/no-origin requests
    if (allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// PREVENT PREFLIGHT FAILURE
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));

// GLOBAL HEADERS FIX (For Vercel)
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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));