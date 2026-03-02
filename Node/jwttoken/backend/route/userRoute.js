import express from 'express'
import { checkdata, createdata, getdata } from '../controller/userController.js'

const route = express.Router()

route.post("/create",createdata)
route.post("/check",checkdata)
route.get("/get", getdata)



export default route

// http://localhost:5000/api/route/create

// http://localhost:5000/api/route/check