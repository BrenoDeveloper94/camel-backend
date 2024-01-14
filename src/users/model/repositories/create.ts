import { Request, Response } from 'express'
import prisma from '../../../PrismaClient'

interface NewUser {
    first_name: string
    last_name: string
    full_name: string
    cpf: string
    email: string
    password: string
    login: string
    login_type: boolean
}

const create = async (req: Request<{}, {}, NewUser>, res: Response) => {

    const {first_name, last_name, full_name, cpf, email, password, login, login_type} = req.body

    try {

        await prisma.user.create({
            data:{
                first_name,
                last_name,
                full_name,
                cpf,
                email,
                password,
                login,
                login_type
            }
        })
        res.status(201)
        res.json('Usuario cadastrado com sucesso')
        
    } catch (error) {
        res.sendStatus(500)
        console.error('Erro:', error)
    } finally {
        await prisma.$disconnect()
    }
}

export default create