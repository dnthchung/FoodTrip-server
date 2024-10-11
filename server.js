// Load environment variables from .env file
require("dotenv").config();

// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const httpError = require("http-errors");
const db = require("./models"); // MongoDB models

// Import routes
const { authRouter } = require("./routes");

// Initialize Express app
const app = express();

// ===== CORS Configuration =====
// ===== Staging =====
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Replace with your front-end URL
//     credentials: true, // Allow cookies and authentication headers to be sent with requests
//   }),
// );
// ===== Production =====
app.use(
  cors({
    origin: ["https://www.foodtripvn.site", "http://localhost:5173", "https://food-trip-client-6ia9ctudu-chung-doans-projects.vercel.app"], // Replace with your front-end URL
    credentials: true, // Allow cookies and authentication headers to be sent with requests
  }),
);

// ===== Middleware Setup =====
app.use(morgan("dev")); // Logger for HTTP requests
app.use(bodyParser.json({ limit: "50mb" })); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" })); // Parse URL-encoded request bodies

// ===== API Routes =====
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, welcome to the API!" });
});

app.use("/api/auth", authRouter); // Authentication routes

// ===== Error Handling =====
app.use((req, res, next) => {
  next(httpError(404, "Resource Not Found")); // Handle 404 errors for unknown routes
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

// ===== MongoDB Connection and Server Initialization =====
db.connectDB()
  .then(() => {
    console.log("Connected to MongoDB successfully");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the application if the database connection fails
  });
