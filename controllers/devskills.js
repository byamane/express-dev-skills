import * as devskillsDb from "../data/devskills-db.js"

function index(req, res) {
  devskillsDb.find({}, function(error, devskills) {
    res.render('devskills/index', {
      devskills: devskills,
      error: error
    })
  })
}

function show(req, res) {
  devskillsDb.findById(req.params.id, function(error, skill) {
    res.render('devskills/show', {
      skill: skill,
      error: error
    })
  })
}

export {
  index,
  show
}