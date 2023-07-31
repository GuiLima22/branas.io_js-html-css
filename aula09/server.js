const express = require("express");
const app = express();
app.use("/app", express.static("./client"));
app.listen(3000);