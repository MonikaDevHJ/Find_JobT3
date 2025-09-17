import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";
import Experience from "~/app/_components/candidate/Experience";

export async function Post(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unaathoirzed" }, { status: 401 });
    }

    const body = await req.json();

    const job = await db.jobPost.create({
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
        employemnetType: body.employemnetType,
        InterviewMode: body.InterviewMode,
      },
    });
    return NextResponse.json({ message: "Job Saved!", job }, { status: 200 });
  } catch (error: any) {
    console.error("❌  Job API Error:", error?.message);
    return NextResponse.json(
      { message: "Error", error: error?.message || "Unknown error  " },
      { status: 500 },
    );
  }
}
