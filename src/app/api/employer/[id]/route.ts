import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ await only params

    if (!id) {
      return NextResponse.json({ message: "USER Id required" }, { status: 400 });
    }

    const employer = await db.employer.findFirst({
      where: { clerkId: id },
      orderBy: { createdAt: "desc" },
    });

    if (!employer) {
      return NextResponse.json({ error: "Employer Not Found" }, { status: 404 });
    }

    return NextResponse.json(employer);
  } catch (error) {
    console.log("Error fetching employer:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
