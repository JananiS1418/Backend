import express  from 'express'
import { createfile, getimage } from '../controller/multerController.js'
import upload from '../middleware/multerMiddleware.js'

const route = express.Router()



route.post("/uploaddata", upload.single("image"), createfile)
route.get("/get",getimage)

export default route

//http://localhost:5000/api/multer/uploaddata
//http://localhost:5000/api/multer/get