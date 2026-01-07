const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔗 MongoDB Atlas Connection

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// Auth routes
const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const expenseRoute = require("./routes/expense");
app.use("/api/expenses", expenseRoute);




