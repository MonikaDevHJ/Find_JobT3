"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">Find Job</h1>


      <div className="flex w-full max-w-xs flex-col space-y-4">
        {/* id Not Loegged In */}
        <SignedOut>
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
        </SignedOut>

        {/* if logged in */}

        <SignedIn>

          <UserButton afterSignOutUrl = "/"/>
              <p className="mt-4 text-green-600 font-semibold">You are signed in!</p>
        </SignedIn>


      </div>
    </div>
  )
}

export default Home;