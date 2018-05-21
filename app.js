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




app.listen(3000, function(){
    console.log("server is running on 3000");
});