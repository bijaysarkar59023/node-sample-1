var express = require("express");
var hbs     = require("hbs");


var app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.use( function(req, res, next){
    res.render("maintenance")
})
app.get("/", function(req, res){
    res.render("index");
});
app.get("/about", function(req, res){
    res.render("about");
});


var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(`server is running on ${PORT}`);
});