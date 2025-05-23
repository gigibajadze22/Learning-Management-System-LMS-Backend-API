import { PrismaClient } from "@prisma/client";
import { AppError } from "../utils/errorHandler.js";
const prisma = new PrismaClient();

export const uploadFile = async (req, res, next) => {  
    try {
        const userId = req.user?.id;

        if (!userId) {
           return next(new AppError("Unauthorized: User not authenticated", 401));
        }

        const { filename, url } = req.body;

        if (!filename || !url) {
            return next(new AppError("Filename and URL are required", 400));
        }

        const file = await prisma.file.create({
            data: {
                filename,
                url,
                uploadedBy: userId,
            },
        });

        res.status(201).json({ file });
    } catch (error) {
        console.error("Upload error:", error);
        return next(new AppError("Error uploading file", 500));
    }
};


export const getFileById = async (req, res, next) => {  
  try {
    
    const fileId = parseInt(req.params.id);

    if (isNaN(fileId)) {
      return next(new AppError("Invalid file ID", 400));
    }

    const file = await prisma.file.findUnique({
      where: { id: fileId },
    });

    if (!file) {
      return next(new AppError("File not found", 404));
    }

    res.json(file);
  } catch (error) {
    console.error("Get file error:", error);
    return next(new AppError("Server error", 500));
  }
};
