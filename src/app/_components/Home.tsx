"use client";

import { useRouter } from "next/navigation";
import { useUser, SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  const router = useRouter();
  const { user, isSignedIn } = useUser();

  const handleCandidateLogin = async () => {
    if (!isSignedIn) {
      // If not Signer In Open Clerk Sign in Modal
      alert("Please Sign in First");
      return;
    }

    // Call API To Check if Candidate already Exist
    const res = await fetch("api/check_candidate", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ clerkId: user.id }),
    });

    const data = await res.json();

    if (data.exist) {
      // ✅ Candidate Already have acccount
      router.push("/find_job");
    } else {
      // Candidate is new - go to registarion form
      router.push("/candidate");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-fuchsia-800 sm:text-4xl md:text-5xl">
        Find Job
      </h1>

      <div className="flex w-full max-w-xs flex-col space-y-4">
        <button
          onClick={handleCandidateLogin}
          className="w-full rounded-xl bg-fuchsia-600 py-3 text-white shadow-md transition duration-300 hover:bg-fuchsia-500"
        >
          Candidate Login
        </button>

        <button
          onClick={() => router.push("employer")}
          className="w-full rounded-xl bg-fuchsia-700 py-3 text-white shadow-md transition duration-300 hover:bg-fuchsia-500"
        >
          Employer Login
        </button>

        <button className="w-full rounded-xl bg-fuchsia-700 py-3 text-white shadow-md transition duration-300 hover:bg-fuchsia-500">
          Admin
        </button>
      </div>
    </div>
  );
}
