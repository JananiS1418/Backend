import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt'

export const createdata = async(req,res)=>{


    const {userName,userAge,userEmail,userPassword} = req.body
    try {

        const checkemail = await userModel.findOne({userEmail})
        if(checkemail){
            res.status(400).json({msg:"Email already exists"})
        }

        const saltkey = 10

        const hashpassword = await bcrypt.hash(userPassword,saltkey)


        const create = await userModel.create({userName,userAge,userEmail,userPassword:hashpassword})
        res.status(201).json({msg:"Data Stored",create})

        
    } catch (error) {
        console.log(error);
        
        
    }

   
    

}


export const checkdata = async(req,res)=>{

    try {

        const {userEmail,userPassword} = req.body

        const checkemail = await userModel.findOne({userEmail})
        if(!checkemail){

            res.status(400).json({msg:"Email Invalid"})
        }
        
        const checkPassword = await bcrypt.compare(userPassword,checkemail.userPassword)

        if(!checkPassword){
            res.status(400).json({msg:"Invalid Password"})
        }

        res.status(200).json({msg:"Successfully done"})
    } catch (error) {

        console.log("error",error);
        
        
    }




}

export const getdata = async(req,res)=>{


    try {

        const get = await userModel.find()
        res.status(201).json({getdatas:get})
        // console.log("data get");
        

        
    } catch (error) {
        console.log("Error",error);
        
        
    }
}

export const getdatabyid = async(req,res)=>{

    try {

        const data = await userModel.findById(req.params.userid)
    res.status(200).json({databyid:data})
        
    } catch (error) {
        
        console.log("Something error",error);
        
    }

    
}

export const updatedata = async(req,res)=>{


  console.log(req);


  const updatenewdata = await userModel.findByIdAndUpdate(req.params.userid,req.body)
  
  res.status(200).json({msg:"succfully updated"})


}


export const deletedata = async(req,res)=>{

    const deletedata = await userModel.findByIdAndDelete(req.params.userid)

    res.status(200).json({msg:"Deleted successfully"})

}