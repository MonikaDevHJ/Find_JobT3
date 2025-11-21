import AppliedCandidates from "~/app/_components/employer/applied/[jobId]/AppliedCandidates";

export default function Page({ params }: { params: { jobId: string } }) {
  return <AppliedCandidates jobId={params.jobId} />;
}
