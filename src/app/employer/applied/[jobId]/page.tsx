import AppliedCandidates from "./AppliedCandidates";

export default async function Page({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;

  return <AppliedCandidates jobId={jobId} />;
}
