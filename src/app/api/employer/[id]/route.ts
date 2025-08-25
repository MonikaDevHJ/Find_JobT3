import { error } from "console";
import { NextResponse } from "next/server";
import { db } from "~/server/db"; //our Prisma Client

//This is How Nextjs Will pass  params (like rolll number)
interface Params {
  params: {
    id: string;
  };
}

// This will runs when someone calls Get/api/employer/[id]
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        {
          message: "USER Id required",
        },
        { status: 400 },
      );
    }

    const employer = await db.employer.findUnique({
      where: { clerkId: id }, //match the clerk UserID
    });

    if (!employer) {
      return NextResponse.json(
        { error: "Employer Not Found" },
        { status: 404 },
      );
    }

    return NextResponse.json(employer);
  } catch(error) {
    console.log("Error fetching employer:", error); 
    return NextResponse.json(
        {error:"Something Went wrong"},
        {status:500}
    )
  }
}
