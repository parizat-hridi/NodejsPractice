const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/register", (req, res) => {
  res.status(200).json({
    message: "I'm Hridi",
    statusCode: 200,
  });
});

module.exports = router;
