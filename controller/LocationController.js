const model = require("../model/Location");
const Locations = model.Locations;

exports.getAllLocations = async (req, res) => {
  const locationData = await Locations.find();
  res.json(locationData);
};

exports.createLocation = async (req, res) => {
  const locations = new Locations(req.body);
  const result = await locations.save();
  res
    .status(201)
    .json(result, {
      status: "201",
      message: "locations send on server successfully",
    });
};
