# Learning Management System (LMS) - Backend API

A full-featured backend API for an online Learning Management System (LMS). This API enables course management, lecture content delivery, student enrollment, assignment submissions, file uploads, and role-based access control using JWT authentication.

## 🌐 Live Demo
_Deployment pending_ (e.g., Heroku)  
_You can run locally as instructed below._

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (`admin`, `instructor`, `student`)
- 📚 **Course Management**
  - Create and manage courses and lectures
  - Enroll students into courses
- 📝 **Assignment Workflow**
  - Create assignments
  - Submit and grade submissions
- 📁 **File Uploads**
  - Upload lecture materials and assignment files
- 📧 **Email Notifications**
  - Email alerts using Nodemailer
- 📄 **API Documentation**
  - Swagger documentation at `/api-docs`
- ⚙️ **Security & Best Practices**
  - Password hashing with bcrypt
  - Centralized error handling
  - CORS configuration
- 📦 **Database**
  - MongoDB with Mongoose _or_ PostgreSQL with Prisma (configurable)

---

## 🧱 Entity Models

### User
- `id`
- `name`
- `email`
- `password`
- `role` (`admin` | `instructor` | `student`)
- `avatar`

### Course
- `id`
- `title`
- `description`
- `createdBy` (instructorId)
- `students[]`

### Lecture
- `id`
- `title`
- `content`
- `courseId`
- `videoUrl`
- `attachments[]`

### Assignment
- `id`
- `title`
- `description`
- `courseId`
- `dueDate`

### Submission
- `id`
- `assignmentId`
- `studentId`
- `file`
- `submittedAt`
- `grade`

### File
- `id`
- `filename`
- `url`
- `uploadedBy`

---

## 📡 API Endpoints

### Auth
- `POST /auth/register`
- `POST /auth/login`

### Users
- `GET /users/me`
- `GET /users/` _(Admin only)_

### Courses
- `POST /courses` _(Admin or Instructor)_
- `GET /courses`
- `GET /courses/:id`
- `POST /courses/:id/enroll` _(Student)_

### Lectures
- `POST /courses/:id/lectures` _(Instructor)_
- `GET /courses/:id/lectures`

### Assignments
- `POST /courses/:id/assignments` _(Instructor)_
- `GET /courses/:id/assignments`
- `POST /assignments/:id/submit` _(Student)_
- `GET /assignments/:id/submissions` _(Instructor)_

### Files
- `POST /files/upload`
- `GET /files/:id`

### Swagger Docs
- `GET /api-docs`

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose) or PostgreSQL (Prisma)
- **Auth:** JWT, bcrypt
- **File Uploads:** Multer
- **Email:** Nodemailer
- **Docs:** Swagger
- **Environment Variables:** dotenv

---

## 📁 .env Example

EMAIL_USER="your_email@example.com"
EMAIL_PASS="your_email_app_password"

DB_USER="your_db_user"
DB_PASSWORD="your_db_password"
DB_HOST="localhost"
DB_PORT=5432
DB_NAME="lms"

JWT_SECRET="your_jwt_secret"
DATABASE_URL="postgresql://your_db_user:your_db_password@localhost:5432/lms?schema=public"
