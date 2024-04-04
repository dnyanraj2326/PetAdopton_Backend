const model = require("../model/Location");
const Locations = model.Locations;

exports.getAllLocations = async (req, res) => {
  const locationData = await Locations.find();
  res.json(locationData);
};

exports.createLocation = async (req, res) => {
    try {
        const locations = new Locations(req.body);
        const result = await locations.save();
        res
          .status(201)
          .json(result, {
            status: "201",
            message: "Location created successfully",
          });
      } catch (error) {
        console.error('Error creating location:', error);
        res.status(500).json({ error: 'Failed to create location' }); // Generic error for now, provide more details if possible
      }
};
