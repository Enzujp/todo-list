const express = require("express");

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, ()=> {
    console.log("This app runs on port 3000");
})


app.get('/', (req, res)=>{
    res.send("This is the homepage baby!")
})