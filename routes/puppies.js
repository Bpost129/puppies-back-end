import { Router } from 'express'
import * as puppiesCtrl from '../controllers/puppies.js'

const router = Router()

// ========== Public Routes ===========

router.get('/', puppiesCtrl.index)

router.delete('/:puppyId', puppiesCtrl.delete)

router.post('/', puppiesCtrl.create)

export {
  router
}