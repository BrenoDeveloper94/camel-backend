import { Router } from 'express'
import remove from '../model/repositories/remove'

const router = Router()

router.delete('/user/:id?', remove)

export default router