const mongoose = require('mongoose');
const { Schema } = mongoose;

const petsOwnerSchema = new Schema({
        ownName: String,
        ownNgoname: String,
        ownNum: Number,
        ownImg:[String],
        adopted:Number,
        totalAvailablePets:Number,
        sheltors:Number,
        address:String,
        city:String,
        state:String,
        pincode:Number,
        thumbnail:[String],
        gender:String
  });

  exports.PetsOwners = mongoose.model('PetsOwners', petsOwnerSchema);