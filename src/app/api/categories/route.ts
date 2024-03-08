import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";


// FETCH ALL CATEGORIES 
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()
        return new NextResponse(JSON.stringify(categories), {status:200})
    } catch (err){
        console.log(err)
        JSON.stringify({message:"Something went wrong!"}), {status:500}
    }
}

export const POST = () => {
    return new NextResponse("Hello", {status:200})
}