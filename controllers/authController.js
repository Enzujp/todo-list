// a general funtion should be written to handle errors


const handleErrors = (err) => {
    console.log(err);
}

module.exports.signup_get = (req, res) => {
    res.send("Signup page");
}

module.exports.login_get = (req, res) => {
    res.send("Login page");
}

module.exports.signup_post = (req, res) => {
    console.log(req.body);
}

module.exports.login_post = (req, res) => {
    console.log(req.body);
}