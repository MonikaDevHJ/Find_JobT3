import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { jobId } = await req.json();

    if (!jobId) {5
      return NextResponse.json(
        { message: "Job ID is required" },
        { status: 400 }
      );
    }

    // check candidate exists
    const candidate = await db.candidate.findUnique({
      where: { clerkId: userId },
    });

    if (!candidate) {
      return NextResponse.json(
        { message: "Candidate profile not found" },
        { status: 404 }
      );  
    }

    // check already applied
    const alreadyApplied = await db.appliedCandidate.findFirst({
      where: {
        candidateId: candidate.id,
        jobId: jobId,
      },
    });

    if (alreadyApplied) {
      return NextResponse.json(
        { message: "You already applied to this job!" },
        { status: 409 }
      );
    }

    // create apply record
    const applied = await db.appliedCandidate.create({
      data: {
        jobId,
        candidateId: candidate.id,
      },
    });

    return NextResponse.json(
      { message: "Application Submitted", applied },
      { status: 201 }
    );
  } catch (error) {
    console.error("Apply Job Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
