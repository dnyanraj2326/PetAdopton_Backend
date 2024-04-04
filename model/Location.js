const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new Schema({
    latitude: String,
    longitude: String,
    dateTime: { type: String, default: Date.now },
   
  });

  exports.Locations = mongoose.model('Location', locationSchema);