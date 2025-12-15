const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("MONGO_URI is missing in environment variables!");
  }

  // If already connected, reuse it
  if (cached.conn) return cached.conn;

  // If connection is in progress, reuse promise
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, {
        // optional but helps stability
        bufferCommands: false,
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("MongoDB Connected Successfully");
  return cached.conn;
};

module.exports = connectDB;