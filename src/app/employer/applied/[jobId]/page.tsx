import AppliedCandidates from "~/app/_components/employer/applied/[jobId]/AppliedCandidates";

export default function Page({ params }: { params: { jobId: string } }) {
  const { jobId } = params;

  return <AppliedCandidates jobId={jobId} />;
}
