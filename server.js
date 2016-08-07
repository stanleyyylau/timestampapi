var express = require('express');
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.json());


app.get('/:id', function (req, res) {
  var id = req.params.id;
  var unixTimestamp = new Date(id*1000);
  var monthes = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var convertedTime = {
      unix: Number(id),
      natural:monthes[unixTimestamp.getMonth()] + " " + unixTimestamp.getDate() + ", " + unixTimestamp.getFullYear()
  }
  res.json(convertedTime);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});