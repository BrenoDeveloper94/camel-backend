import { Request, Response } from 'express'
import prisma from '../../../PrismaClient'


const read = async (req: Request, res: Response) => {

    let id = parseInt(req.params.id)
    let skip = parseInt(req.query.skip as string) || 0
    let take = parseInt(req.query.take as string) || 1000
    let search = req.query.search as string

    if (id) {

        try {

            const user = await prisma.user.findUnique({
                where:{
                    id: id
                }
            })
            user == null ? res.json('Usuário não encontrado') : res.json({user: user})

        } catch (error) {
            res.sendStatus(500)
            console.error('Erro:', error)
        } finally {
            await prisma.$disconnect()
        }
        
    } else {

        if (search) {

            try {

                const user = await prisma.user.findMany({
                    where: {
                        OR: [
                            {
                                first_name: {
                                    contains: search
                                }
                            },
                            {
                                email: {
                                    contains: search
                                }
                            }
                        ]
                    }
                })
                user.length == 0 ? res.json('Usuário não encontrado') : res.json({user: user})
                
                
            } catch (error) {
                res.sendStatus(500)
                console.error('Erro:', error)
            } finally {
                await prisma.$disconnect()
            }
            
        } else {

            try {

                const userCount = await prisma.user.count()
                const user = await prisma.user.findMany({
                    skip: skip, take: take,
                    orderBy: {
                        id: 'desc'
                    }
                })
                res.json({user: user, count: userCount})
                
            } catch (error) {
                res.sendStatus(500)
                console.error('Erro:', error)
            } finally {
                await prisma.$disconnect()
            }
            
        }
        
    }

}

export default read