const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');
// const catchAsync = require('../utils/catchAsync')
const userroutes = require('../controllers/users')


router.route('/register')
.get(userroutes.renderRegisterForm)
.post(userroutes.register);

router.route('/login')
.get(userroutes.renderLoginForm)

.post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), userroutes.login)

router.get("/logout", userroutes.logout)

module.exports = router