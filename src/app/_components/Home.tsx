// app/page.tsx

import { currentUser } from "@clerk/nextjs/server"; // ✅ fixed import
import { SignInButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await currentUser();

  if (user) {
    const role = user.publicMetadata?.role;

    if (role === "candidate") {
      redirect("/candidate");
    } else if (role === "employer") {
      redirect("/employer");
    } else {
      redirect("/select-role");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">Find Job</h1>

      <div className="flex w-full max-w-xs flex-col space-y-4">
        {/* 👇 This shows if not signed in */}
        <SignInButton mode="modal">
          <button className="w-full rounded-xl bg-fuchsia-600 py-3 text-white shadow-md transition duration-300 hover:bg-fuchsia-700">
            Sign In as Candidate
          </button>
        </SignInButton>

        <SignInButton mode="modal">
          <button className="w-full rounded-xl bg-blue-600 py-3 text-white shadow-md transition duration-300 hover:bg-blue-700">
            Sign In as Employer
          </button>
        </SignInButton>
      </div>
    </div>
  );
}
