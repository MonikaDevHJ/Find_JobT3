import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  try {
    const employer = await db.employer.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        employerName: true,
        companyName: true,
        contactNumber: true,
        createdAt: true,
      },
    });
    return NextResponse.json(employer);
  } catch (error) {
    console.log("❌ Error fetching admin employer:", error);
    return NextResponse.json(
      { message: "Failed To Fetch Employer" },
      { status: 500 },
    );
  }
}
