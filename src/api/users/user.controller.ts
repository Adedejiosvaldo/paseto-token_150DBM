import { Request, Response } from "express";
import { hash } from "bcrypt";
import prisma from "../../prismaclient";
import { LoginUserDTO, signUpDto } from "./user.validator";
import { getSymmetricKey } from "../../utils/token";

const Login = async (data: LoginUserDTO) => {
  //
};

// const LoginUserController = async (req: Request, res: Response) => {
//   console.log("na me2");
//   const loginBody: LoginUserDTO = req.body();

//   const user = await prisma.user.findUnique({
//     where: {
//       email: loginBody.email,
//     },
//   });

//   if (!user) {
//     return res.status(404).json({
//       data: {
//         status: "error",
//         message: "User not found",
//       },
//     });
//   }
// };

const CreateUserController = async (req: Request, res: Response) => {
  try {
    const data: signUpDto = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (user) {
      return res.status(400).json({
        data: {
          status: "failed",
          message: "A user with that email already exists",
        },
      });
    }

    const hashedPassword = await hash(data.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
      },
    });

    const token = await getSymmetricKey();

    return res.status(201).json({
      data: {
        token,
        status: "success",
        message: "User created successfully",
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      data: {
        status: "error",
        message: "An error occurred while creating the user",
      },
    });
  }
};
export { CreateUserController };
