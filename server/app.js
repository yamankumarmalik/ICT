// app.js
const express = require("express");
const connectDB = require("./db");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const verifyToken = require("./middlewares/auth");

const app = express();
connectDB();

app.use(express.json());

app.use("/api", registerRoute);
app.use("/api", loginRoute);

// Protected route example
app.get("/api/profile", verifyToken, (req, res) => {
  // Access req.userId to get the user ID
  res.json({ message: "Protected route" });
});
