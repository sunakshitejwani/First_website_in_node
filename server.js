//require our dependencies

var express = require('express');
var expressLayouts=require('express-ejs-layouts');
var bodyParser =require('body-parser');
var app = express();
var port = 8080;

//use ejs  and express layouts
app.set('view engine','ejs');
app.use(expressLayouts);

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));
//route our app
var router=require('./app/routes')

app.use('/',router);


//set the static files (css,images and etc) location
app.use(express.static(__dirname+'/public'));


// start the sever
app.listen(port,function(){
	console.log('App started!');

});

