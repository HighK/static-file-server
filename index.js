const express = require("express");
const app = express();

app.use("/static", express.static(__dirname + "/test"));

app.listen(4000, function() {
  console.log("server run 4000port");
});
