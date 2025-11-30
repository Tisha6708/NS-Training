const express = require("express");

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Home Page",
    status: "success",
  });
});

// About Route
app.get("/about", (req, res) => {
  res.json({
    app: "About Page",
    description: "Learning JSON responses",
  });
});

// Dynamic User Route
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    userId: userId,
    name: "User " + userId,
    role: "Student",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
