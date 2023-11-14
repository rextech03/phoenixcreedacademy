// url: http://localhost:3000/api/users/12345
import prisma from "../../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;

    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });

    if(!user) {
        return NextResponse.json(
            {message: "User not found", },
            {status: 404}
        )
    }

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const PATCH = async (request: NextRequest, {params}: { params: { id: string } }) => {
    try {
        const body = await request.json();
        const {name, email, createdAt} = body;

        const {id} = params;

        const updateUser = await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
                createdAt
            }
        })

        if(!updateUser) {
            return NextResponse.json(
                {message: "User not found"},
                {status: 404}
            )
        }

        return NextResponse.json(updateUser);

    } catch(err) {
        return NextResponse.json({message: "update Error", err}, {status: 500})
    }
}

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
    try {
      const { id } = params;
  
      await prisma.user.delete({
          where: {
              id
          }
      });
  
      return NextResponse.json("User has been deleted");
    } catch (err) {
      return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
    }
  };
