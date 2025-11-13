import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    // ✅ Get logged-in user from Clerk
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // ✅ Parse request body
    const body = await request.json();
    const { employer, company } = body;

    // ✅ Save employer data
    const newEmployer = await db.employer.create({
      data: {
        clerkId: userId,
        employerName: employer.employerName,
        employerId: employer.employerId,
        contactNumber: employer.contactNumber,
        designation: employer.designation,
        companyName: employer.companyName,
        companyWebsite: company.companyWebsite || null,
        companyLocation: company.companyLocation,
        companyID: company.CompanyID,
        companyLogo: company.companyLogo || null,
        createdAt: new Date(),
      },
    });

    return NextResponse.json(
      { message: "✅ Employer saved successfully!", employer: newEmployer },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Employer API Error:", error?.message);
    return NextResponse.json(
      { message: "Something went wrong", error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
