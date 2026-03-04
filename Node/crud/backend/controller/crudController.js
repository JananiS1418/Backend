import crudModel from "../model/crudModel.js"

export const insertdata = async(req,res)=>{

    try {

        const {name,email,age} = req.body

        const adddata  = await crudModel.create({name,email,age})
        console.log(adddata);
        

        res.status(200).json({msg:"Data added Successfully"})
        
    } catch (error) {

        console.log("Data is not added",error);
        res.status(500).json({msg:"Data cannot be added"})
        
    }


}

export const getdata = async(req,res)=>{

    try {

        const get = await crudModel.find()
        res.status(200).json({getdatas:get})
        
    } catch (error) {

        res.status(500).json({msg:"Data cannot be fetch"})


        
    }
}

export const editdata = async(req,res)=>{

    try {

        const {userid} = req.params

        const edit  = await crudModel.findById({userid})

        res.status(200).json({editdata:edit})
        
    } catch (error) {

        res.status(500).json({msg:"Data cannot edit"})
        
    }
}

export const updatedata = async(req,res)=>{

    try {

        const update = await crudModel.findByIdAndUpdate(req.params.userid,req.body,{ returnDocument: 'after' })

        res.status(200).json({msg:"Updated Successfully"})
        
    } catch (error) {

        res.status(500).json({msg:"Data cannot be  updated"})
        
    }
}

export const deletedata = async(req,res)=>{

    try {

        const deletedata = await  crudModel.findByIdAndDelete(req.params.userid)
           
        res.status(200).json({msg:'Data deleted successfully'})

        
    } catch (error) {

        res.status(500).json({msg:"Data cannot be deleted"})
        
    }
}