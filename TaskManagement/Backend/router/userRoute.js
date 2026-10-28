const express=require("express")
const User=require("../model/userSchema")
const router=express.Router()

router.post("/",async (req,res)=>{
    try{
        const{name,email}=req.body;
        if(!name||!email){
            return res.status(400).json({message:"name or email is required"});
        }
        const newuser=await User.create({name:name.trim(),email:email.trim()})
        return res.status(201).json(newuser);
    } catch (error) {
        console.error("Add User error:", error);
        return res.status(500).json({
         message: "Failed to add User",
    });
  }


})