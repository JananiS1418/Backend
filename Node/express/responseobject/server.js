import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import responseroute from './routes/responseRoute.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/user",responseroute)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})
// http://localhost:5000/api/user

