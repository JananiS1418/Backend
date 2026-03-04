import jwt from 'jsonwebtoken'

export const varifiytoekn = (req,res,next)=>{


//console.log(req.headers.authorization);

const token = req.headers.authorization

if(!token) {
    return res.status(400).json({msg:"Token Not Valid"})
}

try {
    
const decode = jwt.verify(token,process.env.SECRET_KEY)

   req.user = decode


  next()

} catch (error) {

  return res.status(404).json({msg:"Not Valid Use Try again"})
   //console.log('error',error);
   
   
}


}