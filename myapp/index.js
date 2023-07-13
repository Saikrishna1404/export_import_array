const express = require("express");
const myapp = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

myapp.listen(3001);
