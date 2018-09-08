// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });

var express = require('express');
var app = express();
var serveStatic = require('serve-static');
const url = require('url');
var callback = function() {} ;
var fs = require('fs');


var obj;
var json = JSON.stringify(obj);

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
//Post data_test from test.html
app.post('/', function(req, res){
  console.log(req.body);
  res.send("ok. NodeJS response");
  obj = req.body;
  json = JSON.stringify(obj); //convert it back to json
	console.log(json+" json");
	fs.writeFile('test/user1.json', json, 'utf8', callback); // write it back 
	
});

//Post data_array from product page
app.post('/product/gold', function(req, res){
  console.log(req.body);
  res.send("Got data_array. NodeJS response");
  obj = req.body;
  json = JSON.stringify(obj); //convert it back to json
  console.log(json+" json");
  fs.writeFile('data/user.json', json, 'utf8', callback); // write it back 
 
});



/**
 * STATIC FILES
 */
app.use(express.static(__dirname+"/"));

app.listen(8080, function(){
	console.log(__dirname);
  console.log('Server running on 8080...');
});
