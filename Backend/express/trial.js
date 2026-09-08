import express from "express";
const app=express();
app.use(express.json());
const PORT=3000;

//Application Level Middleware
// app.use((req,res,next)=>{
//     console.log("Middleware 1");
//     console.log("Request Method: ",req.method);
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Middleware 2");
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("Home");
// });

// app.get((req,res,next)=>{
//     console.log("Request Type: ",req.method);
//     next();
// });

//Middleware Mount on Path
// app.use("/student",(req,res,next)=>{
//     console.log("Requested URL: ",req.url);
//     next();
// });

// app.use("/student",(req,res,next)=>{
//     console.log("Request Type: ",req.method);
//     next();
// },
// (req,res,next)=>{
//     console.log("Request URL: ",req.originalUrl);
//     next();
// });

app.get("/student/:id",(req,res,next)=>{
    if(req.params.id=="0"){
        next("route");
    }
    else{
        next();
    }
},
(req,res)=>{
    res.send("Regular Route");
});

app.get("/student/:id",(req,res)=>{
    res.end("Special Route");
});

app.listen(PORT,()=>{
    console.log("Server Started");
});