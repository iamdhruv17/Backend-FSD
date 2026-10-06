import jwt from "jsonwebtoken"
const authMiddleware=(req,res,next)=>{
    try{
    const {token}=res.cookies
    if(!token)
        return res.status(401).json({message:"Unauthorised"});
    const decoded =jwt.verify(token,process.env,SECRET_KEY)
    
    req.user=decoded;
    next()
}catch(error){
    console.error(error)
    return res.status(500).json({essage:"Authorization failed"});
}

}

exports default authMiddleware;
