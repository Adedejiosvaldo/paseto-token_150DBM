// Middleware factory function

import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export default function validateRequest(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result.error.format());
    }
    next();
  };
}
