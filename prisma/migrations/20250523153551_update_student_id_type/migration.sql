/*
  Warnings:

  - Changed the type of `courseId` on the `Lecture` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `studentId` on the `Submission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Lecture" DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "studentId",
ADD COLUMN     "studentId" INTEGER NOT NULL;
