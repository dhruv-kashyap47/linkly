require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");
const redirectRoutes = require("./routes/redirectRoutes");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("public"));

// API routes
app.use("/api", urlRoutes);
app.use("/api/auth", authRoutes);

// Redirect routes
app.use("/", redirectRoutes);

// Error handler at the end
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
