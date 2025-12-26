import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const employerId = params.id;

    await db.employer.delete({
      where: { employerId },
    });
    return NextResponse.json({ message: "Employer Deleted Succesfully" });
  } catch (error) {
    console.log("❌ Error deleting Employer:", error);
    return NextResponse.json(
      { message: "Failed To Delete Employer" },
      { status: 500 },
    );
  }
}
