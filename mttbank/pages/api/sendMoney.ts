import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prismaClient";
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") {
        return res.status(500).json({ message: "Cannot connect" })
    }
    try {
        const name = req.body.name as string
        const email = req.body.email as string
        const password = req.body.password as string

        if (name == "" || email == "" || password == "") {
            return res.status(404).json({ message: "Missing data" })
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                creditScore: 800,
                rewards: ["50% off"], 
                name: name,
                email: email,
                password: hashedPass
            }
        })

        res.status(200).json({ user })
    } catch (err) {
        return res.status(500).json({ message: `An error happend: ${err}` })
    }
}