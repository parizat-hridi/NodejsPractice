// Practicing Built-in fs module - managing files
const fs = require("fs");

//writeFile
fs.writeFile("demo1.txt", "This is sample text. ", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});

//adding data using append file
fs.appendFile("demo1.txt", "I'm Parizat Binta Kabir", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});

//readFile
fs.readFile("demo1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//renameFile
fs.rename("demo1.txt", "demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});

deleteFile;
fs.unlink("demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully deleted");
  }
});

//exists or not
fs.exists("demo2.txt", (result) => {
  if (result) {
    console.log(found);
  } else {
    console.log("not found");
  }
});
