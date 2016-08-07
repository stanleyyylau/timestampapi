var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var date = require("datejs");


app.use(bodyParser.json());


app.get('/:id', function (req, res) {
  var id = req.params.id;
  var monthes = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var convertedTime = {};
  var unixTimestamp;
  //if id is a date string
  if (id.match(/[a-z]/i)) {
        if(Date.parse(id) === null){
            return res.json({
                unix:null,
                natural:null
            });
        }
        var unixtime = Date.parse(id).getTime()/1000;
        unixTimestamp = new Date(unixtime*1000);
        convertedTime = {
        unix: Number(unixtime),
        natural:monthes[unixTimestamp.getMonth()] + " " + unixTimestamp.getDate() + ", " + unixTimestamp.getFullYear()
        }
        res.json(convertedTime);
    }
    else{
        if(Date.parse(id) === null){
            return res.json({
                unix:null,
                natural:null
            });
        }
      unixTimestamp = new Date(id*1000);
      convertedTime = {
      unix: Number(id),
      natural:monthes[unixTimestamp.getMonth()] + " " + unixTimestamp.getDate() + ", " + unixTimestamp.getFullYear()
      }
    res.json(convertedTime);
    }
});
  
  
  

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});