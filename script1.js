const express = require("express");
const app = express();
const path = require('path');

// Serve all static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index1.html"));
});

app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
