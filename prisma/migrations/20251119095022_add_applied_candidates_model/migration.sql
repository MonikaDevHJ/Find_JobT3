-- AddForeignKey
ALTER TABLE "AppliedCandidate" ADD CONSTRAINT "AppliedCandidate_candidateID_fkey" FOREIGN KEY ("candidateID") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
