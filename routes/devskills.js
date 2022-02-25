import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'
const router = Router()

/* GET users listing. */
// GET - localhost:3000/devskills
router.get('/', devskillsCtrl.index)
// GET - localhost:3000/devskills/new
router.get('/new', devskillsCtrl.new)
// GET - localhost:3000/devskills/:id
router.get("/:id", devskillsCtrl.show)

export {
  router
}
