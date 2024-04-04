const express = require('express')
const locationController = require('../controller/LocationController')
const router = express.Router();



router.post("/create",locationController.createLocation)
router.get('/',locationController.getAllLocations)




module.exports = router 