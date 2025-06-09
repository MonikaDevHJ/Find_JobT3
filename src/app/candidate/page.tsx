// app/candidate/page.tsx
export default function CandidatePage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Title */}
      <div className="flex items-center justify-center px-4 pt-16 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        <p
          className="text-fuchsia-700"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Candidate Form
        </p>
      </div>

      {/* Responsive Card */}
      <div className="mt-10 px-4 sm:px-10 md:px-24">
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
          {/* Add your content or form here */}
          <div className="">
            <p className="text-base font-semibold">Name</p>
            <input
              type="text"
              name=""
              id=""
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-8">
            <p className="text-base font-semibold">Phone Number</p>
            <input
              type="text"
              name=""
              id=""
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Number"
            />
          </div>
          <div className="mt-8">
            <p className="text-base font-semibold">Email</p>
            <input
              type="text"
              name=""
              id=""
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your mail"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
