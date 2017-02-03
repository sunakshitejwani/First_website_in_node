//require express
var express=require('express');
var path= require('path');

//create our router object
var router = express.Router();


//export our router
module.exports=router;

// route of our homepage

router.get('/', function(req, res){

	res.render('pages/index');
});

//route for our about page
router.get('/about',function(req,res){
	//res.send('hello again! I am the about page! ')
	var users=[
	{ name: 'Sunakshi', email:'sunakshitejwani@gmail.com', avatar:'https://avatars0.githubusercontent.com/u/9900938?v=3&u=a6bdc4d26ffc317dd4ae91b4d83cfbb473a7cc96&s=400'},
	{ name: 'Naruto', email:'naruto@gmail.com', avatar:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqBs3nFfed445D-1HHBxr9pwJz7kT6I9mqS0U_jmTpIU6nLsavzQ'},
	{ name: 'Sakura', email:'sakura@gmail.com', avatar:'http://vignette1.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/300?cb=20160122100059'},
	{ name: 'Kakashi', email:'kakashi@gmail.com', avatar:'http://images4.fanpop.com/image/photos/22500000/kakashi-sensei-kakashi-22519264-500-375.jpg'},
	{ name: 'Sasuke', email:'sasuke@gmail.com', avatar:'http://vignette2.wikia.nocookie.net/naruto/images/1/12/Sasuke_apariencia_Shippuden_HD.png/revision/latest?cb=20140715002302&path-prefix=es'},

	];
	res.render('pages/about',{users: users });
});
//route for our contact page
router.get('/contact',function(req,res){
	res.render('pages/contact');
});

router.post('/contact',function(res,req){
 
});