//practicing http request with route parameter and header
const express = require("express");
const app = express();

const PORT = 3000;
//http request with route parameter
// app.get("/userID/:id/name/:name", (req, res) => {
//   const { id, name } = req.params;
//   res.send(`Student id is: ${id}, name:${name}`);
// });

//http request with header

app.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");

  res.send(`Student id is: ${id}, name:${name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
