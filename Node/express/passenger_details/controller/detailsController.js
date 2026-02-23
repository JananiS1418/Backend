import detailsModel from "../model/detailsModel.js";

export const createdata =async (req,res)=>{

    //console.log(req.body);
    

    try {

        const adddata = await detailsModel.create(req.body)
        res.status(201).json({msg:"Successfully done".adddata})
        
    } catch (error) {
        console.log("Something error",error);
        
        
    }
    
    

}

export const getdata =async (req,res)=>{

    //console.log(req.body);
    

    try {

        const getdata = await detailsModel.find()
        res.status(201).json({msg:getdata})
        
    } catch (error) {
        console.log("Something error",error);
        
        
    }
    
    

}