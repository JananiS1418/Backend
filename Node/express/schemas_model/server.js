import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userroute from  './route/userRoute.js'
import connectdb from './config/db.js'

dotenv.config()
connectdb()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/data",userroute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully  http://localhost:${PORT}`);
    
})
// http://localhost:5000/api/data