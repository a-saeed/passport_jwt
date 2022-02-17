import express from "express";
import { login, register, protect } from "../controllers/userController.js";
import { checkAuthentication } from "../middleware/checkAuthentication.js";

const userRouter = express.Router()


userRouter.post('/register', register)
userRouter.post('/login', login);

userRouter.get('/protected',checkAuthentication, protect);


export default userRouter;