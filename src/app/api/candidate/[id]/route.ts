import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ correct way

    if (!id) {
      return NextResponse.json({ message: "User ID required" }, { status: 400 });
    }

    const candidate = await db.candidate.findFirst({
      where: { clerkId: id },
      orderBy: { createdAt: "desc" },
    });

    if (!candidate) {
      return NextResponse.json({ message: "Candidate not found" }, { status: 404 });
    }

    let resumeBase64: string | undefined;
    if (candidate.resumeLink) {
      const base64 = Buffer.from(candidate.resumeLink).toString("base64");
      resumeBase64 = `data:application/pdf;base64,${base64}`;
    }

    return NextResponse.json({ ...candidate, resumeLink: resumeBase64 });
  } catch (error) {
    console.error("❌ Error fetching candidate:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
