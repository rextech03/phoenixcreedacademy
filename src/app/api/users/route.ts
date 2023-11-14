import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../../prisma/client';

export async function GET() {
    try {
        const users = await prisma.user.findMany()

        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({message: "Get Error", error}, {status: 500})
    }     
}


export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const {name, email, createdAt} = body;

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                createdAt
            }
        })

        return NextResponse.json(newUser);

    } catch(error) {
        return NextResponse.json({message: "User Error", error}, {status: 500})
    }
}