import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET(
  request: Request,
  { params }: { params: { jobId: string } }
) {
  try {
    const { jobId } = params;

    if (!jobId) {
      return NextResponse.json(
        { message: "Job ID is required" },
        { status: 400 }
      );
    }

    const appliedCandidates = await db.appliedCandidate.findMany({
      where: { jobId },
      include: {
        candidate: true,
        job: true,
      },
    });

    return NextResponse.json(
      {
        message: "Applied candidates loaded",
        candidates: appliedCandidates,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching applied candidates:", error);

    return NextResponse.json(
      { message: "Failed to load applied candidates" },
      { status: 500 }
    );
  }
}
