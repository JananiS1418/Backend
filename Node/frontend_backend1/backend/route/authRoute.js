import e from "express";
import { added,logindata,getlogin } from "../controllers/authController.js";
import { loginData } from "../controllers/loginController.js";

const authRoute = e.Router()

authRoute.post("/add",added)
authRoute.post("/checklogin",logindata)
authRoute.get("/getlogdatas",getlogin)
authRoute.post("/addedthedata",loginData)
export default authRoute



// http://localhost:5000/api/login/add

// http://localhost:5000/api/login/checklogin

// http://localhost:5000/api/login/getlogdatas
// http://localhost:5000/api/login/addedthedata