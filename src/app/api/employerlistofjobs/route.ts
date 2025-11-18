import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";
import { join } from "path";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const myJobs = await db.jobPost.findMany({
      where: {
        clerkId: userId,
      },
      include: {
        appliedcandidate: true,
      },
      orderBy: { createdAt: "desc" },
    });

    // Add appliedCount
    const formatted = myJobs.map((job) => ({
      ...job,
      appliedCount: job.appliedcandidate.length,
    }));

    return NextResponse.json(formatted);
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error fetching employer jobs", error: err.message },
      { status: 500 },
    );
  }
}
