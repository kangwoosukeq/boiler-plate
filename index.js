const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://eqkws:ppc1212@boiler-plate.y0wat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! Hello Fuck!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
