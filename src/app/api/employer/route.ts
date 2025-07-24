import { NextResponse } from "next/server";
import { EMPTY_PATH } from "zod";

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
        EmployerId: EmployerDetails.EmployerId,
        ContactNumber: EmployerDetails.ContactNumber,
        Designation: EmployerDetails.Designation,
        CompanyName: EmployerDetails.CompanyName,
        createdAt: EmployerDetails.createdAt,

      },
      update: {
        employerName: EmployerDetails.employerName,
        EmployerId: EmployerDetails.EmployerId,
        ContactNumber: EmployerDetails.ContactNumber,
        Designation: EmployerDetails.Designation,
        CompanyName: EmployerDetails.CompanyName,
        createdAt: EmployerDetails.createdAt,
      },
    });
  } catch {}
}
