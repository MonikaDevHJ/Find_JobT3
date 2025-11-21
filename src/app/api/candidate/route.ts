import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

interface PersonalDetails {
  name: string;
  phone: string;
  email: string;
  gender?: string;
  education?: string;
  profileImage?: string | null;
}

interface EducationDetails {
  degree: string;
  stream: string;
  university: string;
  college: string;
  score: string;
}

interface ExperienceDetails {
  company: string;
  role: string;
  years: string;
  resume?: string;
  skills?: string[];
}

interface CandidateRequestBody {
  personal: PersonalDetails;
  education: EducationDetails;
  experience: ExperienceDetails;
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body: CandidateRequestBody = await request.json();
    const { personal, education, experience } = body;

    let resumeBuffer: Uint8Array | null = null;

    // Convert base64 to buffer
    if (experience?.resume) {
      const base64Data = experience.resume.split(",")[1];
      if (base64Data) {
        const buffer = Buffer.from(base64Data, "base64");
        resumeBuffer = new Uint8Array(buffer.buffer); // Prisma supports Uint8Array
      }
    }

    // Check if candidate exists
    const existingCandidate = await db.candidate.findUnique({
      where: { clerkId: userId },
    });

    // Common fields for both create/update
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

      resumeLink: resumeBuffer ?? null,
      profileImage: personal.profileImage ?? null,
      skills: experience.skills ?? [],
    };

    let candidate;

    if (existingCandidate) {
      candidate = await db.candidate.update({
        where: { clerkId: userId },
        data,
      });

      return NextResponse.json(
        { message: "Candidate Updated Successfully", candidate },
        { status: 200 }
      );
    }

    candidate = await db.candidate.create({
      data: { clerkId: userId, ...data },
    });

    return NextResponse.json(
      { message: "Candidate Created Successfully", candidate },
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
