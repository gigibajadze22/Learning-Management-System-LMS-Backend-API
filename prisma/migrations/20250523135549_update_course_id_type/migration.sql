/*
  Warnings:

  - Changed the type of `courseId` on the `Assignment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL;
