const express = require('express');
const { routes, router } = require('../app');

const {body} = require('express-validator')
const userController = require('../controllers/user.controller')

const route = require.Router()

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name must be of atleast 3 character.'),
    body('password').isLength({min:6}).withMessage('Password must be of at least 6 characters.')
],
userController.registerUser)

module.exports = router