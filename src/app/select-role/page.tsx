"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SelectRolePage() {
    const { user } = useUser();
    const router = useRouter();

    // ✅ Auto-redirect if role is already set
    useEffect(() => {
        if (!user) return;

        console.log("User info →", user);
        console.log("User metadata →", user.publicMetadata);
    }, [user]);


    const handleRoleSelect = async (role: "candidate" | "employer") => {
        if (!user) {
            console.log("User not found");
            return;
        }

        try {
            // ✅ Store the role in unsafeMetadata (allowed on frontend)
            await (user as any).update({
                unsafeMetadata: {
                    role,
                },
            });

            // ✅ Redirect based on role
            router.push(role === "candidate" ? "/candidate" : "/employer");
        } catch (error) {
            console.error("Failed to update user role:", error);
        }
    };


    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-blue-50 px-4">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Select Your Role</h1>

            <div className="flex gap-6">
                <button
                    onClick={() => handleRoleSelect("candidate")}
                    className="px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-xl hover:bg-fuchsia-700"
                >
                    I'm a Candidate
                </button>
                <button
                    onClick={() => handleRoleSelect("employer")}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
                >
                    I'm an Employer
                </button>
            </div>
        </div>
    );
}
