import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './route/authRoute.js'
import cors from 'cors'


const app = express()
dotenv.config()


const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

 app.use("/api/route",authRoutes)

app.listen(PORT,()=>{
    console.log(`Server runs successfully , http://localhost:${PORT}`);
    
})

//API call -http://localhost:5000/api/route
