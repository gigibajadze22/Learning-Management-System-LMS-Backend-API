-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "grade" INTEGER,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
