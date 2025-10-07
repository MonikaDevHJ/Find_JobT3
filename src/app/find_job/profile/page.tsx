"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

const ProfilePreview = () => {
  const { user, isLoaded } = useUser();
  const [candidate, setCandidate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const fetchCandidate = async () => {
      try {
        const res = await fetch(`/api/candidate/${user.id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCandidate(data);
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidate();
  }, [isLoaded, user]);

  if (loading) return <p className="p-5 text-center">Loading profile...</p>;

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
          Your Profile
        </h2>

        {/* Personal Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="mb-2 text-xl font-semibold">👤 Personal Information</p>
              <button
                onClick={() => router.push("/candidate?step=1")}
                className="text-sm text-blue-600 underline hover:text-blue-800">
                ✏️Edit
              </button>
            </div>
            <div className="mt-3 ml-8 space-y-2">
              {candidate?.profileImage && (
                <div className="mb-4">
                  <img src={candidate.profileImage} alt="profile"
                  className="h-24 w-24 rounded-full object-cover border" />

                </div>
              )}
              <p><strong>Name:</strong> {candidate?.name || "-"}</p>
              <p><strong>Phone:</strong> {candidate?.phone || "-"}</p>
              <p><strong>Email:</strong> {candidate?.email || "-"}</p>
              <p><strong>Gender:</strong> {candidate?.gender || "-"}</p>
              <p><strong>Education:</strong> {candidate?.education || "-"}</p>
            </div>
          </div>
        </div>

        {/* Education Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="mb-2 text-xl font-semibold">🎓 Education Details</p>
              <button
                onClick={() => router.push("/candidate?step=2")}
                className="text-sm text-blue-600 underline hover:text-blue-800">
                ✏️Edit
              </button>
            </div>
            <div className="mt-3 ml-8 space-y-2">
              <p><strong>Degree:</strong> {candidate?.degree || "-"}</p>
              <p><strong>Stream:</strong> {candidate?.stream || "-"}</p>
              <p><strong>University:</strong> {candidate?.university || "-"}</p>
              <p><strong>College:</strong> {candidate?.college || "-"}</p>
              <p><strong>Score:</strong> {candidate?.score || "-"}</p>
            </div>
          </div>
        </div>

        {/* Experience Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="mb-2 text-xl font-semibold">💼 Experience Details</p>
              <button
                onClick={() => router.push("/candidate?step=3")}
                className="text-sm text-blue-600 underline hover:text-blue-800">
                ✏️Edit
              </button>
            </div>
            <div className="mt-3 ml-8 space-y-2">
              <p><strong>Company:</strong> {candidate?.company || "-"}</p>
              <p><strong>Role:</strong> {candidate?.role || "-"}</p>
              <p><strong>Years:</strong> {candidate?.years || "-"}</p>
            </div>


          </div>
        </div>


        {/* Resume Preview */}
      {candidate?.resumeLink && (
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <p className="mb-4 text-xl font-semibold">📄 You're Resume</p>
            <div className="overflow-hidden  rounded-md border border-gray-400 ">
              <iframe src={candidate.resumeLink} className="h-96 w-full"></iframe>

            </div>

          </div>

        </div>
      )}

      </div>
    </div>
  );
};

export default ProfilePreview;
