const express = require('express')
const userController = require('../controller/User')
const router = express.Router();



router.post("/",userController.createPetsAddoptInfo)
.get('/',userController.getAllUserCreateInfo)
.get('/getUserById',userController.getUserById)




module.exports = router 