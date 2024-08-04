import type { NextApiRequest, NextApiResponse } from 'next'; 
import prisma from './prismaClient';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") {
        return res.status(500).json({ message: "Not Allowed" })
    }

    try { 
        const rewardName = req.body.rewardName
        const userId = req.body.userId

        const findUser = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!findUser) {
            return res.status(404).json({ message: "User not found" })
        }

        const updatedRewards = findUser.rewards.filter((reward) => reward !== rewardName)

        await prisma.user.update({
            where: { id: userId },
            data: { rewards: updatedRewards }
        })
        res.status(200).json({ message: 'Reward Deleted' });
    } catch (err) {
        res.status(401).json({ message: 'Not Allowed or not a valid token' });
    }
}
