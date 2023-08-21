// a general function should be written to handle errors
const User = require("../models/User"); 

const handleErrors = (err) => {
    let errors = { email: "", password: "" } //set errors to objects with empty strings as values
    //check for duplicate error
    if (err.code === 11000) { // .code is an error attribute
        errors.email = 'A User with this Email Address already exists.'
    };

    // Validation errors
    // Using error keywords
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

// create functions using exportable modules which would be handled in authroutes

module.exports.signup_get = (req, res) => {
    res.render("signup");
}

module.exports.login_get = (req, res) => {
    res.send("Login page");
}

module.exports.signup_post = async (req, res) => {
    // accessing body content via destructuring
    const { email, password } = req.body; // inputs of these are in postman, to test the signup post without a frontend
    // use try, catch to create use and return adequate error response if error exists

    try {
        const user = await User.create({email, password});// using destructuring to extract values from req.body
        //since creating a user takes some time, the function has to be asynchronous
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = (req, res) => {
    console.log(req.body);
}

