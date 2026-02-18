import mongoose from 'mongoose'

const connectdb = async()=>{
    try {

        const data = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected successfully ${data.connection.host}`);
        
        
    } catch (error) {

        console.log("Something error",error);
        
        
    }
}
export default connectdb