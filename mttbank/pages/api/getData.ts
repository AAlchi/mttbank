import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "GET") {
        return res.status(500).json({ message: "Not Allowed" })
    }

    try { 
        const headerAuth = req.headers.authorization;
        const token = headerAuth && headerAuth.startsWith('Bearer ') ? headerAuth.substring(7) : null;

        if (!token) {
            return res.status(401).json({ message: 'Not a valid token' });
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET || 'test');
        res.status(200).json({ message: 'User Data (protected)', user: decodedData });
    } catch (err) {
        res.status(401).json({ message: 'Not Allowed or not a valid token' });
    }
}
