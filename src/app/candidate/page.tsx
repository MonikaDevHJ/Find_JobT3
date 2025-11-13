import { Suspense } from "react";
import CandidatePage from "../_components/candidate/CandidatePage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CandidatePage />
    </Suspense>
  );
}
