import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import detailsRoute from './route/detailsRoute.js'
import connectdb from './config/detailsdb.js'

dotenv.config()
connectdb()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/user",detailsRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server Connected successfully http://localhost:${PORT}`);
    
})

//http://localhost:5000/api/user