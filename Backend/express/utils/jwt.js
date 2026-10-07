import jwt from "jsonwebtoken";
import SECRET_KEY from "dotenv";

const generateTokenAccess=(user)=>{
    jwt.sign(
        {
            email:user.email,
            id:user.id

        },
        SECRET_KEY_ACCESS,
        {
            expiresIn:'1h',
        }
    )
}

const generateTokenRefresh=(user)=>{
    jwt.sign(
        {
           
            id:user._id
        },
    process.env.SECRET_KEY_REFRESHER,
    {
        expiresIn:"1h"
    }
    )
}


export {generateTokenAccess,generateTokenRefresh}