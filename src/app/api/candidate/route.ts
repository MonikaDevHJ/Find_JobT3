import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    // 👇 Clerk v6 requires await
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { personal, education, experience } = body;

    const candidate = await db.candidate.upsert({
      where: { clerkId: userId },
      create: {
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
      },
      update: {
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
      },
    });

    return NextResponse.json({ message: "Candidate Saved!", candidate }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Candidate API Error:", error?.message, JSON.stringify(error));
    return NextResponse.json(
      { message: "Error", error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
