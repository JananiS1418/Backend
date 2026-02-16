import express from 'express'
import { adddata, getdataheaders, getdataparams, getdataquery } from '../controller/requestController.js'

//http://localhost:5000/api/user/createdata
//http://localhost:5000/api/user/getparamsdata/55000
//http://localhost:5000/api/user/getquerydata
//http://localhost:5000/api/user/getheadersdata
const requestroute = express.Router()

requestroute.post("/createdata",adddata)
requestroute.get("/getparamsdata/:userid",getdataparams)
requestroute.get("/getquerydata",getdataquery)
requestroute.get("/getheadersdata",getdataheaders)

export default requestroute