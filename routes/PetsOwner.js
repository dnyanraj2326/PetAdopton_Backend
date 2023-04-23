const express = require('express')
const petsOwnerController = require('../controller/PetsOwner')
const router = express.Router();



router.post("/",petsOwnerController.createPetOwner)
.get('/',petsOwnerController.getPetOwner)




module.exports = router 