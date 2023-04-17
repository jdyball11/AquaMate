const mongoose = require('mongoose')
const passportlocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({

})

userSchema.plugin(passportlocalMongoose)

// Dont uncomment the below just yet!

// const User = mongoose.model('User', userSchema)

module.exports = User