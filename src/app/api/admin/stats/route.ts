import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // 🔢 COUNT records
    const candidateCount = await db.candidate.count();
    const employerCount = await db.employer.count();
    const jobCount = await db.jobPost.count();

    return NextResponse.json({
      candidates: candidateCount,
      employers: employerCount,
      jobs: jobCount,
    });
  } catch (error) {
    console.error("❌ Admin stats error:", error);
    return NextResponse.json(
      { message: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
