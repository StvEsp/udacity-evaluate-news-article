var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

projectData = [];
const app = express();
app.use(bodyParser.json());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.use(express.static("dist"));
//app.use(express.static(path.resolve("src/client/views/index.html")));
console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/getData", function (req, res) {
  res.send(projectData);
});

app.post("/evaluate", function (req, res) {
  projectData.push(res);
  console.log("projectData", projectData);
});
