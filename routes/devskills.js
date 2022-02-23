import { Router } from 'express'
import * as devskillsDb from '../data/devskills-db.js'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  devskillsDb.find({}, function(error, devskills) {
    res.render('devskills/index', {
      devskills: devskills,
      error: error
    })
  })
})

export {
  router
}