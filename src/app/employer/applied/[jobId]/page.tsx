// app/employer/applied/[jobId]/page.tsx

import React from "react";

interface AppliedPageProps {
  params: {
    jobId: string;
  };
}

const AppliedCandidatesPage = ({ params }: AppliedPageProps) => {
  const { jobId } = params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-fuchsia-700">
        Applied Candidates for Job: {jobId}
      </h1>
    </div>
  );
};

export default AppliedCandidatesPage;
