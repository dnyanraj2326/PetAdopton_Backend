const express = require('express')
const authController = require('../controller/AuthController')
const router = express.Router();



router.post("/register",authController.registerController)
.post('/login',authController.loginController)
.post('/forgotPass',authController.forgotPasswordController)





module.exports = router 