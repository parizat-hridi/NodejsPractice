const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I am a get method at home route");
});
app.post("/", (req, res) => {
  res.send("I am a post method at home route");
});
app.put("/", (req, res) => {
  res.send("I am a put method at home route");
});
app.delete("/", (req, res) => {
  res.send("I am a delete method at home route");
});

module.exports = app;
