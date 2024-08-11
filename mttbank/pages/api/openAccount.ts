import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prismaClient";
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") {
        return res.status(500).json({ message: "Cannot connect" })
    }
    try {
        const theUserEmail = req.body.email  

        if (theUserEmail == "" || theUserEmail == null) {
            return res.status(401).json({ message: "Unable to complete request" })
        }
  
        const user = await prisma.user.update({
            where: { email: theUserEmail },
            data: {
                accounts: {
                    create: [
                        {
                            balance: 0,
                            deposits: 0,
                            withdrawals: 0,
                            date: new Date(),
                        },
                    ],
                },
            }
        })

        res.status(200).json({ user })
    } catch (err) {
        return res.status(500).json({ message: `An error happend: ${err}` })
    }
}