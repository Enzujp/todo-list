const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();



// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
// const dbURI = "mongodb+srv://jay:zuzu@cluster0.zyzefdv.mongodb.net/" //make collection names plural
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => app.listen(3000), console.log("This finally works baby"))
//   .catch((err) => console.log(err));
app.listen(8000, console.log("this works"))

let newItems = []; // The position of this empty list is very important.

// routes
app.use(authRoutes);

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



// cookies
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());




