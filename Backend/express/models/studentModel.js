const mongoose=require('mongoose');
const { generateTokenRefresh } = require('../utils/jwt');
// import tokenAccess
const 
const studentSchema=new mongoose.Schema({
    user:{
        type:Sting,
        required:true

    },
    age:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true

    }
    tokenAccess:{
        type:String,
        required:true


    }
    tokenRefresh:{
        type:String,
        required:true

    }




})

const Student=mongoose.model("Student",studentSchema);
module.exports=Student;
