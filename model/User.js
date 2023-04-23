const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    pet_id:String,
    userName: String,
    mobileNumber: Number,
    email: String,
    gender: String,
    dateOfBirth: String,
    currentAddress: String,
    permentAddress: String,
    city: String,
    state: String,
    date: { type: Date, default: Date.now },
    professional: String,
    identity: String,
    
  },{timestamps : true});

  exports.Users = mongoose.model('Users', userSchema);