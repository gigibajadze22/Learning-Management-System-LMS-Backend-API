import { PrismaClient } from "@prisma/client";
import { AppError } from "../utils/errorHandler.js";
const prisma = new PrismaClient();


export const createAssignmentByCourseId = async (req, res,next) => {
    const courseId = parseInt(req.params.id); 
    const { title, description, dueDate } = req.body;

    try {
        const assignment = await prisma.assignment.create({
            data: {
                title,
                description,
                dueDate: new Date(dueDate), 
                courseId: courseId           
            },
        });
        res.status(201).json(assignment);
    } catch (error) {
        console.error(error); 
        return next(new AppError("Error creating assignment", 500));
    }
}

export const getAssignmentByCourseId = async (req, res,next) => {
    const courseId = parseInt(req.params.id); 

    try {
        const assignments = await prisma.assignment.findMany({
            where: {
                courseId: courseId,
            },
        });
        res.status(200).json(assignments);
    } catch (error) {
        console.error(error); 
        return next(new AppError("Error fetching assignments", 500));
    }
}

export const uploadProfileImage = async (req, res,next) => {
    const { userId } = req.params;
    const file = req.file; 

    if (!file) {
        return next(new AppError("No file uploaded", 400));
    }

    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(userId) },
            data: { profileImage: file.path }, 
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error); 
       return next(new AppError("Error uploading profile image", 500));
    }
}
