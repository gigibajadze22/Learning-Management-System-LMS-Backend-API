import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sendEmail } from "../utils/emailService.js";
import { AppError } from "../utils/errorHandler.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

const prisma = new PrismaClient();


export const register = async (req, res,next) => {
  
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    return next(new AppError("Error registering user", 500));
  }
}


export const login = async (req, res,next) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      return next(new AppError("Invalid password", 401));
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    
    delete user.password; 
    
    res.status(200).json({token, user });
  } catch (error) {
   return next(new AppError("Error logging in", 500));
  }
}

export const forgetPassword = async (req, res, next) => {
    const { email } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
           return next(new AppError("User not found", 404));
        }
       
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
        await prisma.user.update({
            where: { email },
            data: {
                otpCode,
                otpExpiry,
            },
        });
        
         sendEmail(email,
            "Password Reset OTP",
            `<h1>Password Reset OTP Code</h1>
      <p>You requested a password reset. Use the following OTP code to reset your password:</p>
      <h2 style="color: #4CAF50; font-size: 32px; letter-spacing: 5px; text-align: center;">${otpCode}</h2>
      <p>This code will expire in 10 minutes.</p>
      <p>If you didn't request this, please ignore this email.</p>`
        );
        res.json({ message: "OTP sent to email"});

    } catch (error) {
        return next(new AppError("Failed to send OTP", 500));
    }
}

export const resetPassword = async (req, res,next) => {
    const { email, otpCode, newPassword } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return next(new AppError("User not found", 404));
        }
        if (user.otpCode !== otpCode || new Date() > user.otpExpiry) {
            return next(new AppError("Invalid or expired OTP", 400));
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await prisma.user.update({
            where: { email },
            data: {
                password: hashedPassword,
                otpCode: null,
                otpExpiry: null,
            },
        });
        res.json({ message: "Password reset successfully" });
    } catch (error) {
        return next(new AppError("Failed to reset password", 500));
    }
}
