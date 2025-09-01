import { NextResponse } from "next/server";
import { db } from "~/server/db";

interface Params {
  params: {
    id: string;  // This will be Clerk's user.id
  };
}

export async function GET(_request: Request, { params }: Params) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ message: "User ID required" }, { status: 400 });
    }

    const candidate = await db.candidate.findFirst({
      where: { clerkId:id },
      orderBy : {createdAt:"desc"}
    });

    if (!candidate) {
      return NextResponse.json({ message: "Candidate not found" }, { status: 404 });
    }

    return NextResponse.json(candidate, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching candidate:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
