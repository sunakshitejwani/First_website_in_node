//require our dependencies

var express = require('express');
var app = express();
var port = 8080;

//route our app
var router=require('./app/routes')

app.use('/',router);

//set the static files (css,images and etc) location
app.use(express.static(__dirname+'/public'));


// start the sever
app.listen(port,function(){
	console.log('App started!');

});

