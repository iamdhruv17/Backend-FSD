const mongoose=require('mongoose');
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


})

const Student=mongoose.model("Student",studentSchema);
module.exports=Student;
