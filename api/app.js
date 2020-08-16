const fs = require("fs");
const path = require("path");
const express = require("express");
const words = require("./generate_words");

const port = 3000;
const app = express();

// catch all
app.get("*", (req, res) => {
  console.log(words.words(10));
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

// start the api
app.listen(port, () => console.log(`listening on port ${port}`));
