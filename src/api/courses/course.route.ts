import { Router } from "express";
import validateRequest from "../../utils/validateRequestBody";
import authMiddleWare from "../../utils/auth";
import { GetACourse, GetCourses } from "./course.controller";
import { createCourseValidator } from "./course.validators";
import { CreateUserController } from "../users/user.controller";

const coursesRoutes = Router();

coursesRoutes.get("/all", authMiddleWare, GetCourses);
coursesRoutes.get("/course/:id", authMiddleWare, GetACourse);
coursesRoutes.post(
  "/",
  authMiddleWare,
  createCourseValidator,
  CreateUserController
);

export default coursesRoutes;
