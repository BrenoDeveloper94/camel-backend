import { Router } from 'express'
import read from '../model/repositories/read'

const router = Router()

router.get('/user/:id?', read)

export default router