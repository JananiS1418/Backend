import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import  crudRoute from './route/crudRoute.js'
import connectDb from './config/crudDb.js'
dotenv.config()
connectDb()
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/crud",crudRoute)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server Connected  Successfully http://localhost:${PORT}`);
    
})