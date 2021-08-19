const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/users", userRouter);

app.use("/", (req, res) => {
  res.send("I'm a get request from home route");
});

app.use((req, res) => {
  res.send("404!!! Not a valid URL.");
});

module.exports = app;
