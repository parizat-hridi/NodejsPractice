const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  //   const id = req.query.id;
  //   const name = req.query.name;

  //we can do it by using destructure

  const { id, name } = req.query;
  res.send(`<h1>Student name is: ${name},id is: ${id}</h1>`);
});
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
