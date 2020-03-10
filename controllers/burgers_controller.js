var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req,res){
    burger.all().then(function(burger_data){
        console.log(burger_data);
        //displays burger information on index.handlebars page
        res.render("index",{burger_data});
    })
    
});

router.put('/burgers/update', function(req,res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/");

    })
})

module.exports = router;