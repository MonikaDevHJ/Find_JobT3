"use client";

const Preview = () => {
  return (
    <>
      <div className="mt-10 px-4 sm:px-10 md:px-24">
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
            Your Profile
          </h2>

          {/* Personal Info */}
          <div className="mb-6">
            <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="mb-2 text-xl font-semibold">
                  👤 Personal Information
                </p>
                <button className="text-sm text-blue-600 underline hover:text-blue-800">
                  ✏️Edit
                </button>
              </div>
              <div className="mt-3 ml-8 space-y-2">
                <p>
                  <strong>Name:</strong>{" "}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                </p>
                <p>
                  <strong>Email:</strong>
                </p>
                <p>
                  <strong>Gender:</strong>{" "}
                </p>
                <p>
                  <strong>Education:</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Education Info */}
          <div className="mb-6">
            <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="mb-2 text-xl font-semibold">
                  🎓 Education Details
                </p>
                <button className="text-sm text-blue-600 underline hover:text-blue-800">
                  ✏️Edit
                </button>
              </div>
              <div className="mt-3 ml-8 space-y-2">
                <p>
                  <strong>Degree:</strong>{" "}
                </p>
                <p>
                  <strong>Stream:</strong>
                </p>
                <p>
                  <strong>University:</strong>{" "}
                </p>
                <p>
                  <strong>College:</strong>{" "}
                </p>
                <p>
                  <strong>Score:</strong>{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Experience Info */}
          <div className="mb-6">
            <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="mb-2 text-xl font-semibold">
                  💼 Experience Details
                </p>
                <button className="text-sm text-blue-600 underline hover:text-blue-800">
                  ✏️Edit
                </button>
              </div>
              <div className="mt-3 ml-8 space-y-2">
                <p>
                  <strong>Company:</strong>{" "}
                </p>
                <p>
                  <strong>Role:</strong>{" "}
                </p>
                <p>
                  <strong>Years:</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
