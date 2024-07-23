import { Router } from "express";
import validateRequest from "../../utils/validateRequestBody";
import authMiddleWare from "../../utils/auth";
import { GetACourse, GetCourses } from "./course.controller";

const coursesRoutes = Router();

coursesRoutes.get("/all", authMiddleWare, GetCourses);
coursesRoutes.get("/course/:id", authMiddleWare, GetACourse);
coursesRoutes.post("/", authMiddleWare, GetACourse);

export default coursesRoutes;
