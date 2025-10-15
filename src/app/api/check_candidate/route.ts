import { error } from "console";
import { NextResponse } from "next/server";
import CandidatePage from "~/app/candidate/page";
import { db } from "~/server/db";


export async function POST(req:Request) {
    try{
        const {clerkId} = await req.json();

        if(!clerkId){
            return NextResponse.json({error:"Missing clerkID"}, {status:400})
        }

        const existingCandidate = await db.candidate.findUnique({
            where:{clerkId},
        });

        if(existingCandidate){
            return NextResponse.json({exist : true, Candidate: existingCandidate});
        }
        return NextResponse.json({exists : false});

    }
    catch(error){
        console.error("Error Checking candidate:", error);
        return NextResponse.json({error:"Internal Server Error"}, {status:500})

    }
    
}