import mongoose from 'mongoose'

const multerSchema = new mongoose.Schema({
    name:String,
    image:String
},{timestamps:true})

const multerModel = mongoose.model("imageadd",multerSchema)

export default multerModel