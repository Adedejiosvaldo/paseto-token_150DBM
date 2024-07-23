//   id          String  @id @default(auto()) @map("_id") @db.ObjectId
//   title       String
//   description String
//   teacher     User @relation(fields: [teacherId], references: [id])
//   teacherId   String  @db.ObjectId

import { z } from "zod";
import validateRequest from "../../utils/validateRequestBody";

type CreateCourseDTO = z.infer<typeof createCourseSchema>;

const createCourseSchema = z.object({
  title: z.string().min(4, "Title length is greater than 4"),
  description: z.string().min(10, "Description length is greater than 10"),
  teacherId: z.string(),
});

const getAllCoursesSchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
});

export const createCourseValidator = validateRequest(
  createCourseSchema,
  "body"
);
export const getAllCourseValidator = validateRequest(
  getAllCoursesSchema,
  "query"
);
export { CreateCourseDTO };
