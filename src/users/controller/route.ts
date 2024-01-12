import { Router } from 'express'
import read from '../model/repositories/read'

const router = Router()

router.get('/', read)

export default router

