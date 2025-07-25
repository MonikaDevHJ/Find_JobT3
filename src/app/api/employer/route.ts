import { NextResponse } from "next/server";

import { db } from "~/server/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("incoming Body", body);
    const { id, employer, company } = body;

    const newEmployer = await db.employer.upsert({
      where: {
        id: id || "",
      },
      create: {
        employerName: employer.employerName,
        employerId: employer.employerId,
        contactNumber: employer.contactNumber,
        designation: employer.designation,
        companyName: employer.companyName,
        createdAt: new Date(), // or employer.createdAt if you're sending it
        companyWebsite: company.companyWebsite || undefined, // ✅ proper fallback
        companyLocation: company.companyLocation,
        companyID: company.CompanyID,
      },
      update: {
        employerName: employer.employerName,
        employerId: employer.employerId,
        contactNumber: employer.contactNumber,
        designation: employer.designation,
        companyName: employer.companyName,
        createdAt: new Date(), // or employer.createdAt
        companyWebsite: company.companyWebsite || undefined, // ✅ safe update
        companyLocation: company.companyLocation,
        companyID: company.CompanyID,
      },
    });

    return NextResponse.json(
      { message: "Employer Saved!", employer },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("❌ Server Error:", error?.message || error);
    return NextResponse.json(
      { message: "Something went wrong", error: error?.message || error },
      { status: 500 },
    );
  }
}
