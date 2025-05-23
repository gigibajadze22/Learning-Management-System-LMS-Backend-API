/*
  Warnings:

  - The primary key for the `Assignment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Assignment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `students` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `File` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `File` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Lecture` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Lecture` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Submission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Submission` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `courseId` on the `Assignment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createdBy` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `uploadedBy` on the `File` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `courseId` on the `Lecture` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `assignmentId` on the `Submission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `studentId` on the `Submission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER NOT NULL,
DROP COLUMN "students",
ADD COLUMN     "students" INTEGER[],
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "File" DROP CONSTRAINT "File_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "uploadedBy",
ADD COLUMN     "uploadedBy" INTEGER NOT NULL,
ADD CONSTRAINT "File_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Lecture" DROP CONSTRAINT "Lecture_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD CONSTRAINT "Lecture_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "assignmentId",
ADD COLUMN     "assignmentId" INTEGER NOT NULL,
DROP COLUMN "studentId",
ADD COLUMN     "studentId" INTEGER NOT NULL,
ADD CONSTRAINT "Submission_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
