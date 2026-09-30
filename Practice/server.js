import express from "express";
const app=express();

app.get("/square/area",(req,res)=>{
    const width=req.query.width;
    if(!width){
        return res.status(400).json({
            message:"No width passed"
        });
    }
    const area=width*width;
    return res.json({area});
})

app.get("/square/parameter",(req,res)=>{
    let per=req.query.per;
    if(!per){
        return res.status(400).json({
            message:"No per passed"
        })
    }
    per=parseInt(per);
    const p=4*per;
    return res.json({p});
})

app.get("/rectangle/area",(req,res)=>{
    let l=req.query.l;
    let b=req.query.b;
    if(!l || !b){
        return res.status(400).json({
            message:"No length or bredth or both passed"
        })
    }
    l=parseInt(l);
    b=parseInt(b);
    const area=l*b;
    return res.json({area:area});
});

app.get("/rectangle/perimeter",(req,res)=>{
    let l=req.query.l;
    let b=req.query.b;
     if(!l || !b){
        return res.status(400).json({
            message:"No length or bredth or both passed"
        })
    }
    l=parseInt(l);
    b=parseInt(b);

    const perr=2*(l+b);
    return res.json({perimeter:perr});
})


app.get("/rectangle/a")




app.listen(8000,()=>{
    console.log("server started");
});