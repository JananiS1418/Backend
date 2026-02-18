import express from 'express'
import { createdata, getdata } from '../controller/userController.js'

// http://localhost:5000/api/data/create

// http://localhost:5000/api/data/get

const route =  express.Router()

route.post("/create",createdata)
route.get("/get",getdata)

export default route