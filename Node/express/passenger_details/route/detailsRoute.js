import express from 'express'
import { createdata, getdata } from '../controller/detailsController.js'

// http://localhost:5000/api/user/create

const route = express.Router()

route.post("/create",createdata)
route.get("/get",getdata)

export default route