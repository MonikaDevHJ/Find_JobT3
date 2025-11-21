import { NextResponse } from "next/server";
import { db } from "~/server/db";

// GET /api/employer/applied/[jobId]
export async function GET(
  request: Request,
  context: { params: { jobId: string } }
) {
  try {
    const jobId = context.params.jobId;

    if (!jobId) {
      return NextResponse.json(
        { message: "Job ID is required" },
        { status: 400 }
      );
    }

    // Fetch all applied candidates for this job
    const appliedCandidates = await db.appliedCandidate.findMany({
      where: { jobId },
      include: {
        candidate: true, // fetch candidate profile details
        job: true,       // if you also want job details
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
