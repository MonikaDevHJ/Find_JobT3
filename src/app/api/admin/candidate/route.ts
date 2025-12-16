import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  try {
    const candidate = await db.candidate.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
      },
    });
    return NextResponse.json(candidate);
  } catch (error) {
    console.log("❌ Error fetching admin candidates:", error);
    return NextResponse.json(
      { message: "Failed to Fetch Candidate " },
      { status: 500 },
    );
  }
}
