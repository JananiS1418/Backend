import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import requestroutes from './route/requestRoute.js'

dotenv.config()

const  app = express()

app.use(cors())

app.use(express.json())

app.use("/api/user",requestroutes)

const PORT =  process.env.PORT || 5000

app.listen(PORT,()=>{
   console.log(`Server running at http://localhost:${PORT}`)

    
})
// http://localhost:5000/api/user