import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function  DELETE( req:Request, { params }: { params : {id: string} } ) {
   
    try{
        const jobId = params.id;

        await db.appliedCandidate.deleteMany ({
            where : {jobId}
        })

        await db.jobPost.delete ({
            where : {id : jobId}
        });

        return NextResponse.json({message : "Job Deleted Succcefully"});

    }catch (error) {
       
        console.log("❌ Error deleting job:", error)
        return NextResponse.json(
            {message : "Failed to delete Job"},
            {status : 500}
        );
    }
}
