const mongoose =require('mongoose')

const profileSchema =mongoose.Schema({
    name:{
        type: String,
    },
    university:{
        type: String,
    },
    address:{
        type: String,
    },
    email:{
        type: String,
    },
    
   
},{
    timestamps:true
})
module.exports =mongoose.model('Profile',profileSchema)