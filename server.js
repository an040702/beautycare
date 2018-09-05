// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });

var express = require('express');
var app = express();
var serveStatic = require('serve-static');
const url = require('url');


/**
 * STATIC FILES
 */
app.use(express.static(__dirname+"/"));


// Default every route except the above to serve the index.html
// app.get('*', function(req, res) {  
//     res.sendFile(path.join(__dirname));
// });
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
// app.use('/*',function(req, res) {
//     res.sendfile(__dirname + '/pages/index.html');
// });
// This is a server file
// app.get("*", function(req, res) {
//     res.render("./index.html");
// });
// app.get('/beautycare/*', function (req, res) {
// res.sendFile(path.join(__dirname, './pages', 'index.html')); // change this
// });
// app.get('/', function(req, res) {
//     res.sendFile( __dirname + "/" + "index.html" );
// });
app.listen(8080, function(){
	console.log(__dirname);
    console.log('Server running on 8080...');
    // console.log(__dirname);
});
// app.use(express.static('pages'));
// app.get('pages/index.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "pages/index.html" );
// })

// var server = app.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port   
//   console.log("Example app listening at http://%s:%s", host, port)
// })

// var express = require('express');
// var path = require('path');
// var router = express.Router();
 
// // serve angular front end files from root path
// router.use('/', express.static('app', { redirect: false }));
 
// // rewrite virtual urls to angular app to enable refreshing of internal pages
// router.get('*', function (req, res, next) {
//     res.sendFile(path.resolve('pages/index.html'));
// });
 
// module.exports = router;

// var http = require('http');
// var fs = require('fs');

// const PORT=8080; 

// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });

// var express = require('express');
// var app = express();

// console.log(__dirname);
// app.use(express.static(__dirname)); //__dir and not _dir
// var port = 8080; // you can use any port
// app.listen(port);
// console.log('server on' + port);