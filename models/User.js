// require mongoose for database creation
const mongoose = require("mongoose");


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


// create model based on Schema.

const User = mongoose.model('user', userSchema); // takes singular collection name and schema name as arguments.

module.exports = User;