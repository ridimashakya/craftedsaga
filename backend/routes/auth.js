import express from "express"
import { Register, Login } from "../controller/auth.js"

const router = express.Router(); 

router.post("/register", Register)
router.post("/login", Login)


export {router as AuthRouter}