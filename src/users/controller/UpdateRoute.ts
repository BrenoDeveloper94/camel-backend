import { Router } from 'express'
import update from '../model/repositories/update'

const router = Router()

router.put('/user/:id?', update)

export default router