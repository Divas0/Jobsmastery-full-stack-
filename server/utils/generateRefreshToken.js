import jwt from "jsonwebtoken"
  export function generateRefreshToken (id, secretKey){
     const refreshToken=jwt.sign({
id
    }, secretKey)
    return refreshToken
 }