import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'
const router = Router()

/* GET users listing. */
// GET - localhost:3000/todos
router.get('/', devskillsCtrl.index)
// GET - localhost:3000/todos/:id
router.get("/:id", devskillsCtrl.show)

export {
  router
}