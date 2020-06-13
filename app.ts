import express from "express";
let app = express();

app.get("/xxx", function (request, response) {
  response.send("hi World");
});

app.listen(4455, function () {
  console.log("Example app listening on prot 3000");
});
