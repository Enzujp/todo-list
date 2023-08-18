const express = require("express");

const app = express();

const authRoutes = require("./routes/authRoutes");

const User = require("./models/User");

app.set("view engine", "ejs" ); //must place this below express, i.e after express app has been declared.

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json);// allows access to json files present in body

app.use(authRoutes);

app.use(User);

app.use(express.static("public"));// to serve up static files

const DBURI = "";
//connect to database

// mongoose.connect(DBURI, ); //incomplete

app.listen(3030, ()=> {
    console.log("This app runs on port 3030");
})

let newItems = [];// The position of this empty list is very important.

app.get('/', (req, res)=>{
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);

    res.render('index', {day:day, newListItems:newItems}) //the key name must correspond with the variable name in the ejs file
})

app.post('/', (req, res)=> {
    let newItem = req.body.newTodo // Grabs hold of variable item
    newItems.push(newItem);

    res.redirect('/'); // redirects to the home route, that contains code to handle received variable.
})