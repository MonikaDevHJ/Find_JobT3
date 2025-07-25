import { NextResponse } from "next/server";

import { db } from "~/server/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, personal, education, experience } = body;

    const candidate = await db.candidate.upsert({
      where: {
        id: id || "", //if no ID Prisma will create new
      },
      create: {
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
    
    return NextResponse.json(
      { message: "Candidate Saved!", candidate },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
