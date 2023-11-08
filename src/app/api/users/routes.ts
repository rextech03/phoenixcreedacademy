import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../../prisma/client';

type Data = {
    name: string
}

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // Get prisma to get user
        const data = await prisma.user.findMany()
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json(error)
    }
    // if(req.method === 'GET'){
        
    // }
    // res.status(200).json({ name: 'John Doe'})
}