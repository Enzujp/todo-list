// require router modules from express package
const { Router } = require("express");

const authController = require("../controllers/authController")

// set extracted router module to a const for use.

const router = Router();

// create routes for Login and Signup

router.get('/signup', authController.signup_get);

router.get('/login', authController.login_get);

router.post('/signup', authController.signup_post);

router.post('/login', authController.login_post);



module.exports = router;