// use Express.js
var express = require("express");

// set express to variable name 'app'
var app = express();

// set PORT to PORT on the server or 3017 in localhost
var PORT = process.env.PORT || 3017;

// what to do when a user goes to the root page
app.get("/", (req, res) => {
  res.send("Hello World");
});

// start the server and display a message in console to show the server is up
var server = app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
