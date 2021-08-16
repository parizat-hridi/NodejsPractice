//http routing and nodemon package
const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleReadFile(200, "./views/index.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./views/contact.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./views/about.html");
  } else {
    handleReadFile(404, "./views/error.html");
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
