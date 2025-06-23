const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db.js");
require("dotenv").config();
const path = require("path");
const AuthRouter = require("./routes/AuthRouter.js");
const UserRouter = require("./routes/UserRouter.js");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

// Serve uploads folder for Vercel (static files)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", AuthRouter); // Make sure this is correctly set up
app.use("/api/user", UserRouter);

// Only connect to DB and listen if not running in Vercel serverless
if (process.env.VERCEL) {
  module.exports = app;
} else {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
