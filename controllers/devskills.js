import * as devskillsDb from "../data/devskills-db.js"

function index(req, res) {
  devskillsDb.find({}, function(error, devskills) {
    res.render('devskills/index', {
      devskills: devskills,
      error: error,
      date: req.date,
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

function newSkill(req, res) {
  res.render('devskills/new')
}

function create(req, res) {
  devskillsDb.create(req.body, function(error, skill) {
    res.redirect('/devskills')
  })
}

function deleteSkill(req, res) {
  devskillsDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect('/devskills')
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
}