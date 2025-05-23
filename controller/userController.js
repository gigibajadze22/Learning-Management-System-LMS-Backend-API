import { PrismaClient } from "@prisma/client";
import { AppError } from "../utils/errorHandler.js";
const prisma = new PrismaClient();


export const getMyProfile = async (req, res, next) => {
  try {
    const userId = req.user.id; 
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return next(new AppError("User not found", 404));
    }
    delete user.password;
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return next(new AppError("Internal server error", 500));
  }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
       return next(new AppError("Internal server error", 500));
    }
}

export const uploadPicture = async (req, res, next) => {
    try {

        if (!req.user || !req.user.id) {
            return next(new AppError("Unauthorized", 401));
          }

      const userId = req.user.id; 
      
      if (!req.file) {
        return next(new AppError("No file uploaded", 400));
      }
  
      const user = await prisma.user.update({
        where: { id: userId },
        data: { avatar: req.file.path }
      });

      res.json(user);
    } catch (err) {
      console.error(err);
      return next(new AppError("Internal server error", 500));
    }
  }
  