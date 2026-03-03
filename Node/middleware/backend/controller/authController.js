import authModel from "../model/authModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createdata = async(req,res)=>{

    // console.log(req.body);


    try {

        const {name,email,password} = req.body

        console.log(req.body);
        

        const checkemail =  await authModel.findOne({email})

        if(checkemail){

            return res.status(404).json({msg:"Email already exists"})
        }

        const saltkey = 10

        const hashpassword = await bcrypt.hash(password,saltkey)


         const adddata = await authModel.create({name,email,password:hashpassword})

         res.status(200).json({msg:"Successfully done"})


        
    } catch (error) {
        
        console.log("error",error);
        
    }
    
}

export const  logindata = async(req,res)=>{

    try {

        const {email,password} = req.body

        const  checkemail = await authModel.findOne({email})

        if(!checkemail){
            return res.status(404).json({msg:"Invalid email"})
        }

        const checkpassword = await bcrypt.compare(password,checkemail.password)

        if(!checkpassword){
             return res.status(404).json({msg:"Invalid password"})

        }

        const tokengenerate = jwt.sign({id:checkemail._id,name:checkemail.name},process.env.SECRET_KEY,{expiresIn:"1h"})

        res.status(200).json({msg:"Valid user",token:tokengenerate})
  

    } catch (error) {
        
    }
}