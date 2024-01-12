import { Request, Response } from 'express'
import prisma from '../../../PrismaClient'

const read = async (req: Request, res: Response) => {
    prisma.user.count()
    res.send('oi')
}

export default read