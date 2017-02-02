// // //import the http module
//  var http=require('http');

//  //handle sending requests and returning responses
//  function handleRequests(req,res){
//  	//return string
//  	res.end('Welcome to the Magical World!');
//  }



//  //create server
//  var server = http.createServer(handleRequests);

//  //start server and listen on port x

//  server.listen(8080,function(){
//  console.log('Listening on magic port 8080 :-)');

//  });

///////////  EXPRESS  ///////////


var express = require('express');
var app = express();
var port = 8080;

// start the sever
app.listen(port,function(){
	console.log('App started!');

});

// route our app
app.get('/', function(req, res){

	res.send('hello World Again!');
});
