import authModel from "../model/authModel.js";
import bcrypt from 'bcrypt'

export const added = async(req,res) => {

//console.log(req.body);

const {name,email,password} = req.body

try {

    const checkEmail = await authModel.findOne({email})

    if(checkEmail){

       res.status(400).json({msg:"Already Email Excites"})

    }

     const saltRound = 10
    const hashedpassword = await bcrypt.hash(password,saltRound)




    const addeddata = await authModel.create({
        name,email,password:hashedpassword
    })
    res.status(201).json({msg:"Successfully done",addeddata})
    
} catch (error) {

    console.log(error);
    
    
}

  
}



export const logindata = async(req,res)=>{

    try{

        const {email,password} = req.body
        const checkEmail = await authModel.findOne({email})

        if(!checkEmail) {

           return res.status(404).json({msg:"Email Invalid"})

        }

        const checkPassword = await bcrypt.compare(password,checkEmail.password)

       if(!checkPassword){
           return res.status(404).json({msg:"Password Invalid"})

       }
   
        res.status(200).json({msg:"Succfully done"})
    


    }catch(error){

        console.log('Error',error);
        

    }
       

}



export const getlogin = async(req,res)=>{
    

    try {

        const dataget = await authModel.find()

        res.status(200).json({getdatas:dataget})
        
    } catch (error) {
        console.log('error',error);
        
    }



}