import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ applied: [] });
    }

    // Fetch candidateId using clerkId
    const candidate = await db.candidate.findUnique({
      where: { clerkId: userId },
    });

    if (!candidate) {
      return NextResponse.json({ applied: [] });
    }

    // get all applied jobIds
    const applied = await db.appliedCandidate.findMany({
      where: {
        candidateID: candidate.id,
      },
      select: { jobId: true },
    });

    return NextResponse.json({
      applied: applied.map((a) => a.jobId),
    });
  } catch (error) {
    return NextResponse.json({ applied: [] });
  }
}
