import { NextApiRequest, NextApiResponse } from "next"; 
import prisma from "./prismaClient";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") {
        return res.status(500).json({ message: "Cannot connect" })
    }
    try { 
        const email = req.body.email as string
        const password = req.body.password as string

        if (email == "" || password == "") {
            return res.status(404).json({ message: "Missing data" }) 
        } 

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return res.status(404).json({ message: "Failed" }) 
        }

        const comparePass = await bcrypt.compare(password, user.password)

        if (!comparePass) {
            return res.status(401).json({ message: "Failed" }) 
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "test", {expiresIn: '1h'})

        res.status(200).json({ token, user })
    } catch (err) {
        return res.status(500).json({ message: `An error happend: ${err}` })
    }
}