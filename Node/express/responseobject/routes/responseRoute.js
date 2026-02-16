import express from 'express'
import { createdata, getdata } from '../controllers/responseController.js'


// http://localhost:5000/api/user/create
// http://localhost:5000/api/user/responsedata/1


const route = express.Router()



route.post("/create",createdata)
route.get("/responsedata/:userid",getdata)

export default route