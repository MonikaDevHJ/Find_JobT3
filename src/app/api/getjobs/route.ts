  // app/api/getjobs/route.ts
  import { NextResponse } from "next/server";
  import { db } from "~/server/db";

  export async function GET(req: Request) {
    try {
      // get query parameters from the URL
      const { searchParams } = new URL(req.url);
      const title = searchParams.get("title") || "";
      const location = searchParams.get("location") || "";

      const interviewMode = searchParams.get("InterviewMode")?.split(",") || [];

      const workMode = searchParams.get("WorkMode")?.split(",") || [];

      const eligibility = searchParams.get("eligibility")?.split(",") || [];

      const educationMapping: Record<string, string[]> = {
        Gradtion: ["BE", "B.Tech", "B.E", "B.Com", "B.Sc", "BA", "BCA", "Any Grdaution"],
        "Post Graduation": ["M.Tech", "M.Sc", "MBA", "M.Com", "MA", "MCA"],
        "10 th": ["10", "10th", "SSLC"],
        "12 th": ["12", "12th", "PUC", "HSC"],
        "Diploma": ["Diploma"],
      };

      let expandEligibitly: string[] = [];
      eligibility.forEach((edu) => {
        if (educationMapping[edu]) {
          expandEligibitly = [...expandEligibitly, ...educationMapping[edu]];
        } else {
          expandEligibitly.push(edu);
        }
      });

      // build prisma filter dynamically
      const jobs = await db.jobPost.findMany({
        where: {
          AND: [
            title
              ? { designation: { contains: title, mode: "insensitive" } }
              : {},
            location
              ? { location: { contains: location, mode: "insensitive" } }
              : {},

            interviewMode.length > 0
              ? { OR: interviewMode.map((mode) => ({ InterviewMode: mode })) }
              : {},
            workMode.length > 0
              ? { OR: workMode.map((mode) => ({ WorkMode: mode })) }
              : {},
            expandEligibitly.length > 0
              ? {
                  OR: eligibility.map((edu) => ({
                    eligibility: { contains: edu, mode: "insensitive" },
                  })),
                }
              : {},
          ],
        },
        orderBy: { createdAt: "desc" },
      });

      return NextResponse.json(jobs);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Error fetching jobs" },
        { status: 500 },
      );
    }
  }
