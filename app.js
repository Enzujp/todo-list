const express = require("express");

const app = express();

app.set("view engine", "ejs" ); //must place this below express, i.e after express app has been declared.

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, ()=> {
    console.log("This app runs on port 3000");
})

var newItems = [];// The position of this empty list is very important.

app.get('/', (req, res)=>{
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options);

    res.render('index', {day:day, newListItems:newItems}) //the key name must correspond with the variable name in the ejs file
})

app.post('/', (req, res)=> {
    var newItem = req.body.newTodo
    newItems.push(newItem);

    res.redirect('/');
})