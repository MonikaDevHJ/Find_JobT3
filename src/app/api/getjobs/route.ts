// app/api/getjobs/route.ts
import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET(req: Request) {
  try {
    // get query parameters from the URL
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "";
    const location = searchParams.get("location") || "";

    const interviewMode = searchParams.get("InterviewMode")?.split(",") || [];

    const workMode = searchParams.get("WorkMode")?.split(",") || [];

    const eligibility = searchParams.get("eligibility")?.split(",") || [];

    // build prisma filter dynamically
    const jobs = await db.jobPost.findMany({
      where: {
        AND: [
          title
            ? { designation: { contains: title, mode: "insensitive" } }
            : {},
          location
            ? { location: { contains: location, mode: "insensitive" } }
            : {},

          interviewMode.length > 0
            ? { OR: interviewMode.map((mode) => ({ InterviewMode: mode })) }
            : {},
          workMode.length > 0
            ? { OR: workMode.map((mode) => ({ WorkMode: mode })) }
            : {},
          eligibility.length > 0
            ? {
                OR: eligibility.map((edu) => ({
                  eligibility: { contains: edu, mode: "insensitive" },
                })),
              }
            : {},
        ],
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error fetching jobs" },
      { status: 500 },
    );
  }
}
