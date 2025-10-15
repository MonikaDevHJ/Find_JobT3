import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function POST(req: Request) {
  try {
    const { clerkId } = await req.json();

    if (!clerkId) {
      return NextResponse.json({ error: "Missing clerkId" }, { status: 400 });
    }

    const existingCandidate = await db.candidate.findUnique({
      where: { clerkId },
    });

    if (existingCandidate) {
      return NextResponse.json({ exists: true, candidate: existingCandidate });
    }

    return NextResponse.json({ exists: false });
  } catch (error) {
    console.error("Error checking candidate:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
