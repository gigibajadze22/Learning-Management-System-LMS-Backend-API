import { PrismaClient } from "@prisma/client";
import { AppError } from "../utils/errorHandler.js";
const prisma = new PrismaClient();

export const submitAssignmentById = async (req, res, next) => {
    const assignmentId = req.params.id;
    const studentId = req.user.id;
    const {file, grade, submittedAt} = req.body;

    try {
        const submission = await prisma.submission.create({
            data: {
                file,
                grade,
                submittedAt: new Date(submittedAt),
                assignmentId: assignmentId,
                studentId: studentId
            },
        });
        res.status(201).json(submission);
    } catch (error) {
        console.error(error);
        return next(new AppError("Error creating submission", 500));
    }
}


export const getSubmissionByAssignmentId = async (req, res, next) => {
    const assignmentId = req.params.id;
    try {
        const submission = await prisma.submission.findMany({
            where: { assignmentId: assignmentId },
        });
        if (!submission || submission.length === 0) {
            return next(new AppError("Submission not found", 404));
        }

        res.status(200).json(submission);
    } catch (error) {
        return next(new AppError("Error fetching submission", 500));
    }
}
