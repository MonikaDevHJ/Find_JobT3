import { Suspense } from "react";
import EmployerPage from "../_components/employer/EmployerPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmployerPage />
    </Suspense>
  );
}
