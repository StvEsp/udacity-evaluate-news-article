var path = require("path");
const express = require("express");
require("dotenv").config();

projectData = [];
const mockAPIResponse = require("./mockAPI.js");
const app = express();

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

app.get("/getEntry", function (req, res) {
  res.send(projectData);
});

app.post("/evaluate", function (req, res) {
  projectData.push(req.body);
  console.log("projectData", projectData);
});

// const FormData = require("form-data");
// const formdata = new FormData();
// formdata.append("key", process.env.API_KEY);
// formdata.append("txt", "YOUR TEXT HERE");

// const requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow",
// };

// const response = fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
//   .then(response => ({
//     status: response.status,
//     body: response.json()
//   }))
//   .then({status, body} => console.log(status, body))
//   .catch(error => console.log('error', error));
