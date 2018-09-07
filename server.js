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
var json = JSON.stringify(obj);

var obj = {
   table: []
};

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
 
app.post('/', function(req, res){
  console.log(req.body);
    res.send("ok. NodeJS response");
    // res.send(req.body);
    obj.table.push(req.body);
    json = JSON.stringify(obj); //convert it back to json
	console.log(json+" json");
	fs.writeFile('test/user1.json', json, 'utf8', callback); // write it back 
	// bodyParser = [];
	req.body = [];
	obj.table = [];
	console.log(obj.table);
	json = {};
	console.log(json+" json");
});



// obj.table.push({id: 1, square:2});





// fs.writeFile('test/user.json', json, 'utf8', callback);

// fs.readFile('test/user.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } 
//     else 
//     {
// 		    obj = JSON.parse(data); //now it an object
// 		    console.log(obj+"jsjssjs");
// 		    var dataadd = new Array({id: 2, square:4});
// 		    console.log(dataadd+"bbbbb");

// 		    obj.table.push(dataadd); //add some data
// 		    json = JSON.stringify(obj); //convert it back to json
// 		    console.log(json+"json");
// 		    fs.writeFile('test/user.json', json, 'utf8', callback); // write it back 
// 	}
// });

/**
 * STATIC FILES
 */
app.use(express.static(__dirname+"/"));

app.listen(8080, function(){
	console.log(__dirname);
    console.log('Server running on 8080...');
    // console.log(__dirname);
});
