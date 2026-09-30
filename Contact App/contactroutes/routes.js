import express from "express";
const router=express();

const contactt=[{
    name:"Dhruv",
    contact:123456789,
    email:"a@gmail.com"
}]

router.get("/",(req,res)=>{
    res.status(200).json({message:"contacts retrieved",contact});

})

router.post("/contact",(req,res)=>{
    const{name,contact,email}=req.body;
    if(name===undefined||contact===undefined||email===undefined){
        res.status(400).json({message:"please enter all details"});
    }
    const cont={name:name,contact:contact,email:email};
    contactt.push(cont);

    res.status(200).json({message:"new contact entered",contactt});
})


router.get("/filtercontact",(req,res)=>{
    const na=req.body.name;
    const name=contactt.filter(c=>c.name===na);
    if(name===undefined){
        return res.status(400).json({message:"enter name"})
    }
    res.status(200).json({message:"filtered cont is",name});

})



export default router;