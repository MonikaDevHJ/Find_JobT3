import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
    try{
        const jobs = await db.jobPost.findMany({
            orderBy : {createdAt: "desc"}
        });
        return NextResponse.json(jobs);
    }catch{
        
    }

    
}