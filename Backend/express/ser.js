import express from "express";
import studentRoutes from "./Router/studentRouter.js";
const app=express();
app.use(express.json());
app.use("/students",studentRoutes);

app.listen(3000,()=>{
    console.log("Server Started");
});