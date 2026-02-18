import { Router } from "express";
import { LoginController } from "../controller/login.controller";
import { UserRepository } from "../repository/user.repository";

const loginController = new LoginController(new UserRepository());
const authRouter = Router();

authRouter.post("/register", loginController.register);
authRouter.post("/login", loginController.login);

export default authRouter;
