/*
  Warnings:

  - The `resumeLink` column on the `Candidate` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[clerkId]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "clerkId" TEXT NOT NULL,
DROP COLUMN "resumeLink",
ADD COLUMN     "resumeLink" BYTEA;

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_clerkId_key" ON "Candidate"("clerkId");
