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

module.exports.update = (request, response) => {
  const id = request.params.id
  const exerciseId = Math.floor(Math.random() * 1000)
  const exerciseList = {
    exid: exerciseId,
    exname: request.body.exname,
    exsets: request.body.exsets,
    comment: request.body.comment
  }
  Workout.findOne({ _id: id }, (error, workout) => {
    if (error) {
      return response.status(500).json({
        message: 'Error updating record',
        error
      })
    }
    if (!workout) {
      return response.status(404).json({
        message: 'Workout not found'
      })
    }

    workout.exercises.push(exerciseList)

    workout.save((error, workout) => {
      if (error) {
        return response.status(500).json({
          message: 'failed to save record'
        })
      }
      return response.json(workout)
    })
  })
}
// Delete Workout
module.exports.delete = (request, response) => {
  const id = request.params.id
  Workout.findByIdAndRemove(id, (error, workout) => {
    if (error) {
      return response.status(500).json({
        message: 'Error getting record'
      })
    }
    return response.json(workout)
  })
}
// Delete Exercise
module.exports.deleteex = (request, response) => {
  const id = request.params.id
  const exid = request.params.exid
  Workout.findOne({ _id: id }, (error, workout) => {
    if (error) {
      return response.status(500).json({
        message: 'Error updating record',
        error
      })
    }
    if (!workout) {
      return response.status(404).json({
        message: 'Workout not found'
      })
    }

    const pos = workout.exercises.findIndex(el => el.exid === exid)
    if (pos > 0) {
      workout.exercises.splice(pos, 1)
    }

    workout.save((error, workout) => {
      if (error) {
        return response.status(500).json({
          message: 'failed to save record'
        })
      }
      return response.json(workout)
    })
  })
}
