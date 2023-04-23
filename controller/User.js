const model = require("../model/User");
const User = model.Users;
const petModel = require("../model/Pets");
const Pets = petModel.Pets;

const getAllUserCreateInfo = async (req, res) => {
  const userData = await User.find();
  res.json(userData);
};
const createPetsAddoptInfo = async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.status(201).json(result);
};
const getUserById = async (req, res) => {
  try {
    let { phone } = req.query;
    const userRes = await User.find({ mobileNumber: phone });

    if (userRes.length <= 0) {
      return res.status(200).json({ userRes, message: "User data not found" });
    }

  const data = await Promise.all(
      userRes.map(async (item) => {
        let petId = await item.pet_id;
        // console.log("petId",petId)
           return await Pets.findById(petId);
        // console.log("Pet --->", petRes);
        // Pets.findById(req.params.id,function(err,doc) {
        //   res.send(doc);
        // });
        // const userAdoptedPetInfo = userRes.concat(petRes)
        
      })
    );

    return res.status(200).json({data, message: "User data get" }); 
  } catch (error) {
    res.status(500).send({ error, message: "Internal Server Error" });
  }
};

module.exports = { getAllUserCreateInfo, createPetsAddoptInfo, getUserById };
