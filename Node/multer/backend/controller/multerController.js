import multerModel from "../model/multerModel.js";

export const createfile = async(req,res)=>{

    try {

        console.log(req.body);
        console.log(req.file);

        const add = await multerModel.create({
            name:req.body.name,
            image:req.file.path
        })
        
        res.status(200).json({msg:"File added Successfully"})
        
        
    } catch (error) {

        console.log(error);
        res.status(500).json({msg:"File cannot be upload"})
        
        
    }
    
}

export const getimage = async(req,res)=>{
    try {
        
const get = await multerModel.find()

res.status(200).json({getdatas:get})

    } catch (error) {

        console.log("error",error);
        
        
    }
}