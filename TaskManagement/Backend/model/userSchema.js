import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    trim: true,
  },
  emailid: {
    type: String,
    trim: true,
    default: "",
  },
});

const Task = mongoose.model("Task", userSchema);

export default Task;










// import mongoose from "mongoose";

// const UserSchema=mongoose.Schema({
//   name:{
//     type:String,
//     requires:true,
//     trim:true
//   },
//   emailid:{
//     type:String,
//     requires:true,
//     trim:true
//   }
// })