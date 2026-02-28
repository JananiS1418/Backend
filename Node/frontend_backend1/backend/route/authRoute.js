import e from "express";
import { added,logindata,getlogin } from "../controllers/authController.js";

const authRoute = e.Router()

authRoute.post("/add",added)
authRoute.post("/checklogin",logindata)
authRoute.get("/getlogdatas",getlogin)
export default authRoute



// http://localhost:5000/api/login/add

// http://localhost:5000/api/login/checklogin

// http://localhost:5000/api/login/getlogdatas