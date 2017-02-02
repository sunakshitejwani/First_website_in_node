//require express
var express=require('express');
var path= require('path');

//create our router object
var router = express.Router();


//export our router
module.exports=router;

// route of our homepage

router.get('/', function(req, res){

	res.sendFile(path.join(__dirname,'../index.html'))
});

//route for our about page
router.get('/about',function(req,res){
	res.send('hello again! I am the about page! ')
})

//route for our contact page
router.get('/contact');

router.post('/contact');