//practicing http request with josn or from data
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/user", (req, res) => {
  const { name, age } = req.body;
  res.send(`Welcome ${name} & you are ${age} years old`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
