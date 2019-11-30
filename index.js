const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use("/static", express.static(__dirname + "/test"));

app.listen(4000, function() {
  console.log("server run 4000port");
});
