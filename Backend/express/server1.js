import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.send("Home");
});

app.get("/About",(req,res)=>{
    res.send("About");
});

app.get("/Contact",(req,res)=>{
    res.send("Contact");
});

app.listen(4000,()=>{
    console.log("Server Started");
});