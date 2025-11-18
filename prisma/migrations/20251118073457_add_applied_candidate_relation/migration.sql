-- CreateTable
CREATE TABLE "AppliedCandidate" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "candidateID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppliedCandidate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AppliedCandidate" ADD CONSTRAINT "AppliedCandidate_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
