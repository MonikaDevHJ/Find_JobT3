import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const candidateId = params.id;

    await db.candidate.delete({
      where: { id: candidateId },
    });

    return NextResponse.json({ message: "Candidate Deleted Succefully" });
  } catch (error) {
    console.log("❌ Error deleting job :", error);
    return NextResponse.json(
      { message: " Failed to Delete Candidate" },
      { status: 500 },
    );
  }
}
