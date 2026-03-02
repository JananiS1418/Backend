import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createdata = async (req,res)=>{

    try {

        const {name,email,password} = req.body

        const checkemail = await userModel.findOne({email})

        if(checkemail){
            return res.status(404).json({msg:"Email Already exists"})
        }

        const saltkey = 10

        const hashpassword = await bcrypt.hash(password,saltkey)
    

        const data =await userModel.create({name,email,password:hashpassword})

        res.status(200).json({msg:"Data Stored",data})
        
    } catch (error) {

        console.log(error);
        
        
    }
    


}

export const checkdata = async(req,res)=>{

    try {

        const {email,password} = req.body

        const checkemail = await userModel.findOne({email})

        if(!checkemail){
            return res.status(404).json({msg:"Invalid email"})
        }

        const checkpassword = await bcrypt.compare(password,checkemail.password)
        if(!checkpassword){
            return res.status(404).json({msg:"Invalid password"})
        }

        const tokengenerate = await jwt.sign({id:checkemail._id,email:checkemail.email},process.env.SECRET_KEY,{expiresIn:"1h"})
      console.log(tokengenerate);
      
        res.status(200).json({msg:"Login Successful",token:tokengenerate})
        
    } catch (error) {

        console.log(error);
        
        
    }
}


export const getdata = async(req,res)=>{

    try {
        const dataget = await userModel.find()

        res.status(200).json({msg:"Data stored",dataget})
        
    } catch (error) {
        console.log(error);
        
        
    }
}