import express from "express";
import "dotenv/config";
const app=express();
import routes from "./contactroutes/routes.js";
app.use(express.json());

const PORT=process.env.PORT||3030;

app.use("/",routes);

app.listen(PORT,()=>{
    console.log("Server started");
});

