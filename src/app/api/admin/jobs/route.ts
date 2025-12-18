import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  try {
    const job = await db.jobPost.findMany({
      orderBy: { createdAt: "desc" },

      select: {
        companyName: true,
        location: true,
        designation: true,
        salary: true,
        experience: true,
      },
    });
    return NextResponse.json(job);
  } catch (error) {
    console.log("❌ Error fetching admin Jobs:", error);
    return NextResponse.json(
      { message: "Failed To Fetch Jobs" },
      { status: 500 },
    );
  }
}
