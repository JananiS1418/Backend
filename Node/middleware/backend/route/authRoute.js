import express from 'express'
import { createdata, logindata } from '../controller/authController.js'


const route = express.Router()

route.post("/create",createdata)
route.post("/login",logindata)

export default route

//http://localhost:5000/api/route/create
//http://localhost:5000/api/route/login