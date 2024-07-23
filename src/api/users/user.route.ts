import { Router } from "express";
import validateRequest from "../../utils/validateRequestBody";
import { CreateUserValidator, loginValidator } from "./user.validator";
import { CreateUserController, LoginUserController } from "./user.controller";

const userRoutes = Router();

userRoutes.post("/login", loginValidator, LoginUserController);
userRoutes.post("/signup", CreateUserValidator, CreateUserController);

export default userRoutes;
