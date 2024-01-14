import { Request, Response } from 'express'
import prisma from '../../../PrismaClient'

interface UpdateUser {
    first_name: string
    last_name: string
    full_name: string
    password: string
    login: string
}

const update = async (req: Request, res: Response) => {

    let id = parseInt(req.params.id)
    const {first_name, last_name, full_name, password, login}: UpdateUser = req.body

    try {

        await prisma.user.update({
            where: {
                id: id
            },
            data:{
                first_name: first_name,
                last_name: last_name,
                full_name: full_name,
                password: password,
                login: login
            }
        })
        res.status(200)
        res.json('Usuario atualizado com sucesso')
        
    } catch (error) {
        res.sendStatus(500)
        console.error('Erro:', error)
    } finally {
        await prisma.$disconnect()
    }
}

export default update