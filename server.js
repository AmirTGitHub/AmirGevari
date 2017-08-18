const exphbs = require('express-handlebars')
const express = require("express");
const app = express();
const fs = require('fs');
app.engine('handlebars' , exphbs({defaultLayout:'main'}));
app.set('view engine' , 'handlebars');




app.get('/', function (req, res) {
	res.render('index')

});
app.get('/about' , function (req,res){
	res.render('about')
})

app.get('/contact' , function (req , res){
	res.render('contact')
})

app.get('/github' , function(req , res){
	res.render('github')
})

app.get('/', function (req, res) {

});

app.use(express.static("public", {'extensions': ['html']}));
app.listen(process.env.PORT || 4000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});