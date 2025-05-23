import express from 'express';
import { login, register,forgetPassword,resetPassword } from '../controller/authController.js';
import { auth } from '../middlewares/auth.js';

const authRouter = express.Router();

authRouter.route('/login').post(login);
authRouter.route('/register').post(register);
authRouter.route('/forgetPassword').post(forgetPassword);
authRouter.route('/resetPassword').post(resetPassword);
export default authRouter;