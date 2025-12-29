import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await db.candidate.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Candidate Deleted Successfully",
    });
  } catch (error) {
    console.log("❌ Error deleting candidate:", error);
    return NextResponse.json(
      { message: "Failed to Delete Candidate" },
      { status: 500 }
    );
  }
}
