const Workout = require('../models/Workout')

module.exports.getWorkout = (request, response, next) => {
  Workout.find({}, (error, workout) => {
    if (error) {
      return response.status(500).json({
        message: 'Failed to retrive records'
      })
    }
    return response.json(workout)
  })
}

module.exports.create = (request, response) => {
  const workout = new Workout({
    name: request.body.name,
    days: request.body.days,
    exercises: []
  })

  workout.save(function (error, workout) {
    if (error) {
      return response.status(500).json({
        message: 'Error saving record'
      })
    }
    return response.json({
      message: 'saved',
      _id: workout._id
    })
  })
}
