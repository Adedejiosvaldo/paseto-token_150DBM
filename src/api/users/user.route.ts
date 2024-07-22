import { Router } from "express";
import validateRequest from "../../utils/validateRequestBody";
import { CreateUserValidator, loginValidator } from "./user.validator";
import { CreateUserController } from "./user.controller";

const userRoutes = Router();

// userRoutes.get("/login", loginValidator);
userRoutes.post("/signup", CreateUserValidator, CreateUserController);

export default userRoutes;
