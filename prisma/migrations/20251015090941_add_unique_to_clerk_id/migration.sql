/*
  Warnings:

  - A unique constraint covering the columns `[clerkId]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Candidate_clerkId_key" ON "Candidate"("clerkId");
