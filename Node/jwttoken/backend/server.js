import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute  from './route/userRoute.js'
import connectdb from './config/database.js'

dotenv.config()
connectdb()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/route",userRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

    console.log(`server connected successfully http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/route
