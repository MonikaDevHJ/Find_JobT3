import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    // ✅ Get Clerk user
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // ✅ Parse JSON body
    const body = await request.json();

    // ✅ Create job post
    const newJob = await db.jobPost.create({
      data: {
        clerkId: userId,
        companyName: body.companyName,
        designation: body.designation,
        experience: body.experience,
        location: body.location,
        eligibility: body.eligibility,
        skills: body.skills,
        salary: body.salary,
        openings: body.openings,
        employemnetType: body.employmentType, // ✅ fixed typo
        InterviewMode : body.interviewMode, // ✅ fixed typo
        WorkMode: body.workMode, // ✅ fixed typo
        createdAt: new Date(),
      },
    });

    return NextResponse.json(
      { message: "✅ Job post saved successfully!", job: newJob },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("❌ Job Post API Error:", error?.message);
    return NextResponse.json(
      {
        message: "Error saving job post",
        error: error?.message || "Unknown error",
      },
      { status: 500 },
    );
  }
}
