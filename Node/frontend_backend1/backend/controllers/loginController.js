import authModel from "../model/authModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const loginData = async(req,res)=>{

   try {

    const {email,password} = req.body

    const checkEmail = await authModel.findOne({email})

    if(!checkEmail){
        return res.status(404).json({msg:"invalid email"})
    }

    const checkpassword = await bcrypt.compare(password,checkEmail.password)
   
    if(!checkpassword){

    return res.status(404).json({msg:"Invalid Password"})

    }

    
    const tokengenerate = await jwt.sign({id:checkEmail._id,name:checkEmail.name},process.env.JWT_SECRET_KEY,{expiresIn:"1h"})
     
    res.status(200).json({msg:"Success",token:tokengenerate})
    
   } catch (error) {

    console.log('error',error);
    
    
   }



}