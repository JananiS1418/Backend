import mongoose from 'mongoose'

const detailsSchema = new mongoose.Schema({
     passenger_name : String,
     passenger_age : Number,
     passenger_count : Number,
     status : {type:String,default:"Active"},
     created_by:{type:String,default:"Admin"},
     updated_by:{type:String,default:"User"}
},{timestamps:true})

const detailsModel = mongoose.model("passengerdata",detailsSchema)

export default detailsModel