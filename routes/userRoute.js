import express from 'express';
import { getMyProfile,getUsers,uploadPicture } from '../controller/userController.js';
import { auth,isAdmin } from '../middlewares/auth.js';
import uploadProfileImage from '../middlewares/uploadFiles.js';

const userRouter = express.Router();

userRouter.route('/me').get(auth,getMyProfile);
userRouter.route('/').get(auth,isAdmin,getUsers);
userRouter.route('/uploadImage').post(auth,uploadProfileImage.single('profileImage'),uploadPicture);
export default userRouter;