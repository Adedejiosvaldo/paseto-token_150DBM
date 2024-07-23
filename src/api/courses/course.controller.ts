import { Request, Response } from "express";

const GetCourses = async (req: Request, res: Response) => {};

const GetACourse = async (req: Request, res: Response) => {};

const CreateACourse = async (req: Request, res: Response) => {
  const { title, description, price } = req.body;
  // create a new course
  // return the course
};

const UpdateACourse = async (req: Request, res: Response) => {};

const DeleteACourse = async (req: Request, res: Response) => {};

export { GetCourses, GetACourse, CreateACourse, UpdateACourse, DeleteACourse };
