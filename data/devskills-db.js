const devSkills = [
  {text: 'HTML', done: true, _id: 125223},
  {text: 'CSS', done: true, _id: 127904},
  {text: 'JavaScript', done: true, _id: 139608},
  {text: 'Node.js', done: false, _id: 212121},
  {text: 'Express.js', done: false, _id: 220000},
  {text: 'MongoDB', done: false, _id: 230000},
  {text: 'Python', done: false, _id: 240000},
  {text: 'Django', done: false, _id: 300000},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, devSkills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = devSkills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback){
  skill._id = Date.now() % 1000000
  skill.done = false
  devSkills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the skill object
    const idx = devSkills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = devSkills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete,
}