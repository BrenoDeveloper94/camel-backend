import { Router } from 'express'
import create from '../model/repositories/create'

const router = Router()

router.post('/user', create)

export default router

