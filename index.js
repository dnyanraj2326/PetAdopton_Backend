const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const petsrouter = require('./routes/Pets')
const userrouter = require('./routes/User')
const petOwnerrouter = require('./routes/PetsOwner')
const userLogin = require('./routes/UserAuth')
const locations = require('./routes/Locations')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://petAdoption:1W0xZNaCVS8nMj2u@cluster0.vg9xxox.mongodb.net/?retryWrites=true&w=majority');
console.log("DB Connected")
}

const app = express();
app.use(express.json())

app.use(cors());

app.use('/pets',petsrouter)
app.use('/users',userrouter)
app.use('/petOwner',petOwnerrouter)
app.use('/user/auth',userLogin)
app.use('/locations',locations)




app.listen(8080,() => {
    console.log("Server Started")
})