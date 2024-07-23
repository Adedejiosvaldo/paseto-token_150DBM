import { NextFunction, Request, Response } from "express";
import AppError from "./AppError";
import { verifyToken } from "./token";
import prisma from "../prismaclient";

const authMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(new AppError("Not authorized to access this route", 401));
    }

    const decodedToken = await verifyToken(token);

    const userExist = await prisma.user.findUnique({
      where: {
        id: decodedToken.id as string,
      },
    });

    if (!userExist) {
      return next(
        new AppError("The user belonging to the token no longer exist", 401)
      );
    }
    (req as any).user = decodedToken.id;

    next();
  } catch (error) {
    return next(new AppError("Not authorized to access this route", 401));
  }
};

export default authMiddleWare;
