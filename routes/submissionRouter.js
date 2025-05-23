import express from 'express';

import { submitAssignmentById,getSubmissionByAssignmentId } from '../controller/submissionController.js';
import { auth,isAdminorInstructor,isAdminorStudent } from '../middlewares/auth.js';

const submissionRouter = express.Router();


submissionRouter.route('/:id/submit').post(auth,isAdminorStudent,submitAssignmentById);
submissionRouter.route('/:id/submission').get(auth,isAdminorInstructor,getSubmissionByAssignmentId);



export default submissionRouter;