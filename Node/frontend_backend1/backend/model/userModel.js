import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
      userName:String,
      userAge:Number,
      userEmail:String,
      userPassword:String,
      created_by:{type:String,default:"Admin"},
      updated_by:{type:String,default:"user"}


},{timestamps:true})

const userModel = mongoose.model("userdatasnew",userSchema)

export default userModel