import express from 'express';

import { auth } from '../middlewares/auth.js';
import { uploadFile ,getFileById} from '../controller/fileController.js';
const fileRouter = express.Router();


fileRouter.route('/upload').post(auth,uploadFile);
fileRouter.route('/:id').get(getFileById);
export default fileRouter