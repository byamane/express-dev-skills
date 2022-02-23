const devSkills = [
  {text: 'JavaScript', done: true, _id: 125223},
  {text: 'HTML', done: true, _id: 127904},
  {text: 'CSS', done: true, _id: 139608},
  {text: 'Node.js', done: false, _id: 212121},
  {text: 'Python', done: false, _id: 300000}
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

export { 
	find
}