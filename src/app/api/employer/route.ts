import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    // 👇 Clerk v6 requires await
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { employer, company } = body;

    const newEmployer = await db.employer.create({
      data: {
        clerkId: userId,
        employerName: employer.employerName,
        employerId: employer.employerId,
        contactNumber: employer.contactNumber,
        designation: employer.designation,
        companyName: employer.companyName,
        createdAt: new Date(),
        companyWebsite: company.companyWebsite || undefined,
        companyLocation: company.companyLocation,
        companyID: company.CompanyID,
        companyLogo : company.CompanyLogo,
      },
     
    });

    return NextResponse.json({ message: "Employer Saved!", newEmployer }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Employer API Error:", error?.message, JSON.stringify(error));
    return NextResponse.json(
      { message: "Something went wrong", error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
