import { Router } from "express";
import validateRequest from "../../utils/validateRequestBody";
import authMiddleWare from "../../utils/auth";

const coursesRoutes = Router();

coursesRoutes.get("/all", authMiddleWare);
coursesRoutes.get("/course/:id", authMiddleWare);

export default coursesRoutes;
