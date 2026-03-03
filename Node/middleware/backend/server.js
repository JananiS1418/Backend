import express from "express"
import dotenv  from 'dotenv'
import cors from 'cors'
import  authRoute from './route/authRoute.js'
import connectdb from "./config/authDb.js"

dotenv.config()
connectdb()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/route",authRoute)

const  ported = process.env.PORT

app.listen(ported,()=>{
    console.log(`Server Connected Successfully http://localhost:${ported}`);
    
})

//http://localhost:5000/api/route
