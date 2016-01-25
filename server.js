//
// # File Meta
//
// A simple app to give meta data on an uploaded file
//

var express = require('express');
var app = express();
var router = express.Router();
var multer = require("multer");

router.get('/', function(req, res){
  res.sendFile(__dirname+'/client/index.html');
});

router.post('/upload', multer({dest:"./uploads/"}).single('file'), function(req, res){
  var fileData = req.file.size;
  var nameData = req.body.name;
  var data = {
    name: nameData,
    size: fileData
  };
  res.json(data);
});

app.use('/', router);

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var port = server.address().port;
  console.log("Server listening at port " + port);
});
