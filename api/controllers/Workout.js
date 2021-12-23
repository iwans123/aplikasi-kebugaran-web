const validation = require('express-validator')
const Workout = require('../models/Workout')

module.exports.addWorkout = [
  validation.body('name', 'Please enter workout name').isLength({
    min: 1
  }),
  validation.body('days', 'Choose days'),

  (request, response) => {
    const error = validation.validationResult(request)
    if (!error.isEmpty()) {
      return response.status(400).json({
        errors: error.mapped()
      })
    }
    const workout = new Workout({
      name: request.body.name,
      days: request.body.days,
      exercises: request.body.exerices
    })

    workout.save((error, workout) => {
      if (error) {
        return response.status(500).json({
          message: 'Failed to save',
          error
        })
      }
      return response.json({
        message: 'Workout successfuly saved',
        _id: workout.id
      })
    })
  }
]

module.exports.updateWorkout = [
  // validation rules
  validation.body('name', 'Please enter Workout name').isLength({
    min: 1
  }),
  (request, response) => {
    // throw validation errors
    const errors = validation.validationResult(request)
    if (!errors.isEmpty()) {
      return response.status(422).json({
        errors: errors.mapped()
      })
    }

    const id = request.params.id
    Workout.findOne({
      _id: id
    }, (error, workout) => {
      if (error) {
        return response.status(500).json({
          message: 'Error saving record',
          error
        })
      }
      if (!workout) {
        return response.status(404).json({
          message: 'No such record'
        })
      }

      // initialize record
      workout.name = request.body.name ? request.body.name : workout.name
      workout.days = request.body.days ? request.body.days : workout.days
      workout.exercises = request.body.exercises ? request.body.exercises : workout.exercises

      // save record
      workout.save((error, workout) => {
        if (error) {
          return response.status(500).json({
            message: 'Error getting record.'
          })
        }
        if (!workout) {
          return response.status(404).json({
            message: 'No such record'
          })
        }
        return response.json(workout)
      })
    })
  }

]

module.exports.getWorkouts = (request, response) => {
  Workout.find({}, (error, workout) => {
    if (error) {
      return response.status(500).json({
        message: 'Failed getting workout records'
      })
    }
    return response.json(workout)
  })
}
