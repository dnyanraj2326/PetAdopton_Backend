const petsOwnerModel = require('../model/PetsOwner')
const PetsOwner = petsOwnerModel.PetsOwners;

const getPetOwner = async (req,res) =>{
    const petsOwner = await PetsOwner.find()
    res.json(petsOwner)
}

const createPetOwner = async (req,res) =>{
    const cPetsOwner = new PetsOwner(req.body);
    const result = await cPetsOwner.save() 
    res.status(201).json(result)
}


module.exports = {getPetOwner,createPetOwner}