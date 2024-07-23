import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as middlewares from "./middlewares";
import api from "./api";

import MessageResponse from "./interfaces/MessageResponse";
import userRoutes from "./api/users/user.route";
import coursesRoutes from "./api/courses/course.route";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", async (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/courses", coursesRoutes);

// In your main app file, e.g., app.js or server.js

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
