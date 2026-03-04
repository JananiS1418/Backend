import express from 'express'
import { createdata, dashBoardData, logindata } from '../controller/authController.js'
import { varifiytoekn } from '../middelware/authMiddleware.js'


const route = express.Router()

route.post("/create",createdata)
route.post("/login",logindata)
route.get("/dashboartnew",varifiytoekn,dashBoardData)

export default route

//http://localhost:5000/api/route/create
//http://localhost:5000/api/route/login
//http://localhost:5000/api/route/dashboartnew