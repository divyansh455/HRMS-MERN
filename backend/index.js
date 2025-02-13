 
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json({ limit: "20mb" }));
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Secure CORS

// MongoDB Connection
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydatabase";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB successfully!"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// Routes
app.use("/api", require("./routes")); // Ensure "routes/index.js" exists

// Server setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
