    import mongoose from "mongoose";

    const userSchema = new mongoose.Schema({
        userName:{type:String,required:true},
        userEmail:{type:String,required:true,unique:true},
        userAge:{type:Number,required:true,min:18}
    },{timestamps:true})

    const userModel = mongoose.model('userdatas',userSchema)

    export default userModel