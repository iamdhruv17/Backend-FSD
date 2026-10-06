import jwt from "jsonwebtoken";
import SECRET_KEY from "dotenv";

const getToken=(user)=>{
    jwt.sign(
        {
            email:user.email,
            id:user.id

        },
        SECRET_KEY,
        {
            expiresIn:'1h',
        }
    )
}

module.export=getToken