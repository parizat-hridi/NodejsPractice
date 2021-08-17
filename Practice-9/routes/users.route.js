const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.send("I am a get method at register route");
});

router.get("/login", (req, res) => {
  res.send("I am a get method at login route");
});

module.exports = router;
