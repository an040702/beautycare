// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });

var express = require('express');
var app = express();
var serveStatic = require('serve-static');

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

app.use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
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