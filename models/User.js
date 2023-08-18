// require mongoose for database creation
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// require email validator using deconstruction.

const { isEmail } = require("validator")

// create new Schema 

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // avoids signup with the same account
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address.']// checks email validity and returns error message if not
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Please enter a password longer than 6 characters.']
    }
})

// hash passwords using hooks
userSchema.pre('save', async function (next) {
    console.log("Testing this out before creating", this);// logging and referencing instance
    const salt = await bcrypt.genSalt();//takes a while to do this, hence it is async
    this.password = await bcrypt.hash(this.password, salt);// hashes instance of password and adds salt(hehe)
    next();
})


// function to be performed after creating user
userSchema.post('save', function(doc, next) {
    console.log("New User has been created successfully", doc);
    next();
})


// create model based on Schema.
const User = mongoose.model('user', userSchema); // takes singular collection name and schema name as arguments.

module.exports = User;