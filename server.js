var express = require("express");

var app = express();

var PORT = process.env.PORT || 3017;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
