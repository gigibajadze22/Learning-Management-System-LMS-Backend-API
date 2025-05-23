import { PrismaClient } from "@prisma/client";
import { AppError } from "../utils/errorHandler.js";

const prisma = new PrismaClient();

export const createCourse = async (req, res,next) => {
    const { title, description, createdBy, students } = req.body;
    const userId = req.user.id.toString();
    try {
        const course = await prisma.course.create({
            data: {
                title,
                description,
                createdBy: userId,
                students,
            },
        });
        res.status(201).json(course);
    } catch (error) {
        return next(new AppError("Error creating course", 500));
    }
}


export const getAllCourses = async (req, res,next) => {
    try {
        const courses = await prisma.course.findMany();
        res.status(200).json(courses);
    } catch (error) {
        return next(new AppError("Error fetching courses", 500));
    }
}


export const enrollStudent = async (req, res,next) => {
    const courseId = Number(req.params.id);
    const { students } = req.body;

    if (!Array.isArray(students)) {
        return next(new AppError("Students should be an array", 400));
    }

    try {
        // Get current students or empty array if none
        const course = await prisma.course.findUnique({
            where: { id: courseId },
        });

        if (!course) {
            return next(new AppError("Course not found", 404));
        }

        // Add new students to existing, avoid duplicates
        const updatedStudents = [...new Set([...(course.students || []), ...students])];

        // Update course with new students list
        const updatedCourse = await prisma.course.update({
            where: { id: courseId },
            data: { students: updatedStudents },
        });

        res.json(updatedCourse);
    } catch (error) {
        console.error(error);
        return next(new AppError("Error enrolling students", 500));
    }
};

export const getCourseById = async (req, res,next) => {
    const courseId = parseInt(req.params.id);
    try {
        const course = await prisma.course.findUnique({
            where: { id: courseId },
        });

        if (!course) {
            return next(new AppError("Course not found", 404));
        }

        res.status(200).json(course);
    } catch (error) {
        return next(new AppError("Error fetching course", 500));
    }
}   

export const createLecture = async (req, res,next) => {
    const courseId = parseInt(req.params.id);
    const {title,content,videoUrl,attachments} = req.body;
  try {
    const lecture = await prisma.lecture.create({
      data: {
        title,
        content,
        videoUrl,
        attachments,
        courseId
      },
    });
    res.status(201).json(lecture);
  } catch (error) {
    return next(new AppError("Error creating lecture", 500));
  }
}

export const getLectureBycourseId = async (req, res,next) => {
    const courseId = parseInt(req.params.id);
    try {
        const lectures = await prisma.lecture.findMany({
            where: { courseId },
        });
        if (!lectures) {
            return next(new AppError("No lectures found for this course", 404));
        }

        res.status(200).json(lectures);
    } catch (error) {
       return next(new AppError("Error fetching lectures", 500));
    }
}



