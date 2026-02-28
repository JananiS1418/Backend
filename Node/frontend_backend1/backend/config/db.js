import mongoose from "mongoose";


const connectdb = async()=>{

     try {

        const connect = await mongoose.connect(process.env.MONGO_URL)

        console.log(`Database connected Successfully ${connect.connection.host}`);
        
        
     } catch (error) {

        console.log(error);
        
        
     }

}

export default connectdb
