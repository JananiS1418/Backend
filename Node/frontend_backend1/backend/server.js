import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './route/userRoute.js'
import authRoute from './route/authRoute.js'
import connectdb from './config/db.js'

dotenv.config()
connectdb()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/use",userRoute)

app.use("/api/login",authRoute)


const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server Connected successfully http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/use
