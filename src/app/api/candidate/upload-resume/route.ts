import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { db } from "~/server/db";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("resume") as File;
  const email = formData.get("email") as string;

  if (!file || !email) {
    return NextResponse.json({ error: "Missing file or email" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), "public", "uploads", fileName);

  await writeFile(filePath, buffer);

  const updatedCandidate = await db.candidate.update({
    where: { email },
    data: {
      resumeLink: `/uploads/${fileName}`,
    },
  });

  return NextResponse.json({ success: true, resumeUrl: updatedCandidate.resumeLink });
}
