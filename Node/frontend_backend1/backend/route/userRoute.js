import express from 'express'
import { createdata, getdata, getdatabyid,deletedata, updatedata, checkdata } from '../controllers/userController.js'

// http://localhost:5000/api/use/create
// http://localhost:5000/api/use/check
// http://localhost:5000/api/use/get
// http://localhost:5000/api/use/getdatabyid
// http://localhost:5000/api/use/update/69a29f8f2219ff50efe178f4
// http://localhost:5000/api/use/deletedata/69a29f8f2219ff50efe178f4
const route = express.Router()

route.post("/create",createdata)
route.post("/check",checkdata)
route.get("/get",getdata)
route.get("/getdatabyid/:userid",getdatabyid)
route.put("/update/:userid",updatedata)
route.delete("/deletedata/:userid",deletedata)


export default route