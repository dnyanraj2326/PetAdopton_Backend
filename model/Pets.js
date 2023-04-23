const mongoose = require('mongoose');
const { Schema } = mongoose;

const petsSchema = new Schema({
    petName: String,
    type: String,
    age: Number,
    gender: String,
    category: String,
    about: String,
    address: String,
    breed: String,
    distance: String,
    date: { type: Date, default: Date.now },
    petUrl: [String],
    ownDetails: {
        ownName: String,
        ownNgoname: String,
        ownImg: String,
        ownNum: Number
    }
  });

  exports.Pets = mongoose.model('Pets', petsSchema);