const mongoose=require('mongoose');
const teacherSchema=new mongoose.Schema({
    user:{
        type:String,
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


})

const Teacher=mongoose.model("Teacher",teacherSchema);
module.exports=Teacher;
