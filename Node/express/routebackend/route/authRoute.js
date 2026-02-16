import express from 'express'
import { createUser } from '../controller/userController.js'

//API call -http://localhost:5000/api/route/new/user
// http://localhost:5000/api/route/new/user
const route = express.Router()

route.post("/new/user",createUser)


export default route