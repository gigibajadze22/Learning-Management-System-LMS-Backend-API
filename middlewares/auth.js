import jwt from "jsonwebtoken";
import { AppError } from "../utils/errorHandler.js";

const auth = (req, res, next) => {
    const token = req.headers["authorization"]?.split(' ')[1];
    if (!token) {
       return next(new AppError("No token provided, please log in", 401));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
               return next(new AppError("Token expired, please log in again", 401));
            }
            return next(new AppError("Invalid token", 401));
        }
        req.user = decoded;
        next();
    });
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return next(new AppError("Access denied", 403));
    }
    next();
}

const isAdminorInstructor = (req, res, next) => {
    if (req.user.role !== "admin" && req.user.role !== "instructor") {
        return next(new AppError("Access denied", 403));
    }
    next();
}

const isAdminorStudent = (req, res, next) => {
    if (req.user.role !== "admin" && req.user.role !== "student") {
        return next(new AppError("Access denied", 403));
    }
    next();
}

export { auth, isAdmin, isAdminorInstructor, isAdminorStudent };
