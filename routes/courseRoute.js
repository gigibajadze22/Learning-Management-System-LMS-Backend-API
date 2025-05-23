import express from 'express';

import {
    createCourse,
    getAllCourses,
    enrollStudent,
    getCourseById,
    createLecture,
    getLectureBycourseId,

}
 from '../controller/courseController.js';

import { createAssignmentByCourseId,getAssignmentByCourseId } from '../controller/assigmentController.js';

import { auth,isAdminorInstructor,isAdminorStudent } from '../middlewares/auth.js';

const courseRouter = express.Router();

courseRouter.route('/').post(auth,isAdminorInstructor,createCourse);
courseRouter.route('/').get(getAllCourses);
courseRouter.route('/:id/enroll').post(auth,isAdminorStudent,enrollStudent);
courseRouter.route('/:id').get(getCourseById);
courseRouter.route('/:id/lectures').post(auth,isAdminorInstructor,createLecture);
courseRouter.route('/:id/lectures').get(getLectureBycourseId);
courseRouter.route('/:id/assigments').post(auth,isAdminorInstructor,createAssignmentByCourseId);
courseRouter.route('/:id/assigments').get(getAssignmentByCourseId);

export default courseRouter;