import 'dotenv/config';
import mongoose from "mongoose";
import express from "express";
import StudentRoutes from "./Router/studentRouter.js";
const app=express();
app.use(express.json());
const PORT=process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("database connected")
})
.catch((error)=>{
    console.log("Error connecting to database: ",error);
})

app.use((req,res,next)=>{
    console.log("Request Coming from: ",req.originalUrl);
    console.log("Request Type: ",req.method);
    next();
});

app.use("/students",StudentRoutes);

app.listen(3000,()=>{
    console.log("Server Started");
});

