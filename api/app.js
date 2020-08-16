const fs = require("fs");
const path = require("path");
const express = require("express");

const port = 3000;
const app = express();

// catch all
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

// start the api
app.listen(port, () => console.log(`listening on port ${port}`));
