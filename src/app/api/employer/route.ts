import { NextResponse } from "next/server";

import { db } from "~/server/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, EmployerDetails, companyDetails } = body;

    const employer = await db.employer.upsert({
      where: {
        id: id || "",
      },
      create: {
        employerName: EmployerDetails.employerName,
        employerId: EmployerDetails.EmployerId,
        contactNumber: EmployerDetails.ContactNumber,
        designation: EmployerDetails.Designation,
        companyName: EmployerDetails.CompanyName,
        createdAt: EmployerDetails.createdAt,
        companyWebsite: EmployerDetails.companyWebsite,
        companyLocation: EmployerDetails.companyLocation,
        companyID: EmployerDetails.CompanyID,
      },

      update: {
        employerName: EmployerDetails.employerName,
        employerId: EmployerDetails.EmployerId,
        contactNumber: EmployerDetails.ContactNumber,
        designation: EmployerDetails.Designation,
        companyName: EmployerDetails.CompanyName,
        createdAt: EmployerDetails.createdAt,
        companyWebsite: EmployerDetails.companyWebsite,
        companyLocation: EmployerDetails.companyLocation,
        companyID: EmployerDetails.CompanyID,
      },
    });
    
    return NextResponse.json(
        {message : "Employer Saved!",  employer},
        {status:200},
    );


  } catch(error) {
    console.error("❌ Error:", error)
    return NextResponse.json ({message:"Error",error}, {status:500})

  }
}
