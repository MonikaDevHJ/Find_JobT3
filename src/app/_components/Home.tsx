"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleClick = (role: string) => {
    if (role === "candidate") {
      router.push("/candidate");
    } else if (role === "employer") {
      router.push("/employer");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">
        Find Job
      </h1>

      <div className="flex w-full max-w-xs flex-col space-y-4">
        <button
          onClick={() => handleClick("candidate")}
          className="w-full rounded-xl bg-fuchsia-600 py-3 text-white shadow-md transition duration-300 hover:bg-fuchsia-700"
        >
          Go to Candidate
        </button>

        <button
          onClick={() => handleClick("employer")}
          className="w-full rounded-xl bg-blue-600 py-3 text-white shadow-md transition duration-300 hover:bg-blue-700"
        >
          Go to Employer
        </button>
      </div>
    </div>
  );
}
