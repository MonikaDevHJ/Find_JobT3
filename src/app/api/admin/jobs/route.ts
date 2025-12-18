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
  } catch {}
}
