export const runtime = "nodejs";

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

    // -------------------------------------
    // FINAL FIX: convert base64 to REAL Uint8Array
    // -------------------------------------
    let resumeArray: Uint8Array | null = null;

    if (experience?.resume) {
      const base64 = experience.resume.split(",")[1];

      if (base64) {
        const binary = atob(base64); // decode base64 in node runtime
        const len = binary.length;

        resumeArray = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          resumeArray[i] = binary.charCodeAt(i);
        }
      }
    }

    const data = {
      name: personal.name,
      phone: personal.phone,
      email: personal.email,
      gender: personal.gender ?? "",
      education: personal.education ?? "",

      degree: education.degree,
      stream: education.stream,
      university: education.university,
      college: education.college,
      score: education.score,

      company: experience.company,
      role: experience.role,
      years: experience.years,

      resumeLink: resumeArray, // Prisma Bytes field
      profileImage: personal.profileImage ?? null,
      skills: experience.skills ?? [],
    };

    const existing = await db.candidate.findUnique({
      where: { clerkId: userId },
    });

    if (existing) {
      const updated = await db.candidate.update({
        where: { clerkId: userId },
        data,
      });

      return NextResponse.json(
        { message: "Candidate Updated Successfully", candidate: updated },
        { status: 200 }
      );
    }

    const created = await db.candidate.create({
      data: { clerkId: userId, ...data },
    });

    return NextResponse.json(
      { message: "Candidate Created Successfully", candidate: created },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Candidate API Error:", error);
    return NextResponse.json(
      { message: "Error", error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
