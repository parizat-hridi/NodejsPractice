//Practicing http res, req model and status code
const http = require("http");

const port = 3000;
const hostname = "localhost";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-type": "text/html" });
  res.write("<h1>Hello Server</h1>");
  res.end();
});

myServer.listen(port, hostname, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
