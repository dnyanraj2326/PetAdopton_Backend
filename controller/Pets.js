const model = require('../model/Pets')
const Pets = model.Pets

exports.getAllPets = async (req,res) => {
    const petsData = await Pets.find()
    res.json(petsData)
}

exports.createPets = async (req,res) => {
    const pets = new Pets(req.body);
    const result = await pets.save() 
    res.status(201).json(result)
}
