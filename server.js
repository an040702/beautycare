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
  res.send("ok. NodeJS response");
  obj = req.body;
  json = JSON.stringify(obj); //convert it back to json
	fs.writeFile('test/user1.json', json, 'utf8', callback); // write it back 
	
});

//Post data_array from gold product page
app.post('/product/:name', function(req, res){
  //Get :name from product page
  var name = req.params.name;
  res.send("Got data_array. NodeJS response");
  obj = req.body;
  json = JSON.stringify(obj); //convert it back to json
  fs.writeFile('data/user.json', json, 'utf8', callback); // write it back 
  console.log("Saved!!!");
});
//Post data_array from diamon product page
app.post('/checkout', function(req, res){
  res.send("Got data_array. NodeJS response");
  obj = req.body;
  json = JSON.stringify(obj); //convert it back to json
  fs.writeFile('data/user.json', json, 'utf8', callback); // write it back 
  console.log("Saved!!!");
});
var user_obj =[];
var user_json = JSON.stringify(user_obj);
// Post data_user from checkout page
app.post('/login', function(req, res){
  res.send("Got data_user. NodeJS response");
  user_obj = req.body;
  console.log(user_obj);
  user_json = JSON.stringify(user_obj); //convert it back to json
  fs.writeFile('data/data_users.json', user_json, 'utf8', callback); // write it back 
  console.log("Saved!!!");
});

/**
 * STATIC FILES
 */
app.use(express.static(__dirname+"/"));

app.listen(8080, function(){
  console.log('Server running on 8080...');
});
