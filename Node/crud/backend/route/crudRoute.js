import express from 'express'
import { deletedata, editdata, getdata, insertdata, updatedata } from '../controller/crudController.js'

const route = express.Router()

route.post("/insert",insertdata)
route.get("/get",getdata)
route.get("/edit/:userid",editdata)
route.put("/update/:userid",updatedata)
route.delete("/delete/:userid",deletedata)

export default route

//http://localhost:5000/api/crud/insert
//http://localhost:5000/api/crud/get
//http://localhost:5000/api/crud/edit
//http://localhost:5000/api/crud/update
//http://   localhost:5000/api/crud/delete