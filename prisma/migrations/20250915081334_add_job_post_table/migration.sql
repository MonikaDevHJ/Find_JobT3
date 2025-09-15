-- CreateTable
CREATE TABLE "JobPost" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "eligibility" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "openings" TEXT NOT NULL,
    "employemnetType" TEXT NOT NULL,
    "InterviewMode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobPost_pkey" PRIMARY KEY ("id")
);
