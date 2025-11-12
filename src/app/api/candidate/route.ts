import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { personal, education, experience } = body;

    // ✅ Step 1: check if candidate already exists
    const existingCandidate = await db.candidate.findUnique({
      where: { clerkId: userId },
    });

    if (existingCandidate) {
      // ❌ Don’t create again, return message
      return NextResponse.json(
        {
          message: "Account already exists for this user.",
          candidate: existingCandidate,
        },
        { status: 400 },
      );
    }

    // ✅ Step 2: If new user, continue to create
    let resumeBuffer: Buffer | undefined;
    if (experience?.resume) {
      const base64Data = experience.resume.split(",")[1];
      resumeBuffer = Buffer.from(base64Data, "base64");
    }

    const candidate = await db.candidate.create({
      data: {
        clerkId: userId,
        name: personal.name,
        phone: personal.phone,
        email: personal.email,
        gender: personal.gender,
        education: personal.education,

        degree: education.degree,
        stream: education.stream,
        university: education.university,
        college: education.college,
        score: education.score,

        company: experience.company,
        role: experience.role,
        years: experience.years,
        resumeLink: resumeBuffer,

        profileImage: personal.profileImage || null,
        skills: experience.skills || [],
      },
    });

    return NextResponse.json(
      { message: "Candidate Saved!", candidate },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("❌ Candidate API Error:", error?.message);
    return NextResponse.json(
      { message: "Error", error: error?.message || "Unknown error" },
      { status: 500 },
    );
  }
}
