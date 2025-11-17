import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";
import { error } from "console";


export async function  GET() {
    try{
        const {userId} = await auth();
        if(!userId){
            return NextResponse.json({message : "Unauthorized"}, {status:401})
        }
        const myJobs = await db.jobPost.findMany({
            where:{
                clerkId:userId,
            },
            orderBy : {createdAt: "desc"}
        });
        return NextResponse.json(myJobs)

    }catch (err : any){
        return NextResponse.json(
            {message: "Error fetching employer jobs", error: err.message},
            {status:500}
        )

    }
    
}
