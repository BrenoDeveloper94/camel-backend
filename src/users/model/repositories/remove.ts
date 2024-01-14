import { Request, Response } from 'express'
import prisma from '../../../PrismaClient'

const remove = async (req: Request, res: Response) => {

    let id = parseInt(req.params.id)

    try {

        await prisma.user.delete({
            where: {
                id: id
            }
        })
        res.status(200)
        res.json('Usuario excluído com sucesso')
        
    } catch (error) {
        res.sendStatus(500)
        console.error('Erro:', error)
    } finally {
        await prisma.$disconnect()
    }
}

export default remove