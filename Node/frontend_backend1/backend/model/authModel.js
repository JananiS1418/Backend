import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const authModel = mongoose.model('authdata',authSchema)


export default authModel