const express = require('express')
const petsController = require('../controller/Pets')
const router = express.Router();



router.post("/create",petsController.createPets)
.get('/',petsController.getAllPets)




module.exports = router 