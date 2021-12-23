const { Router } = require('express')
const route = Router()

const workout = require('../controllers/Workout')

route.get('/workout-data', workout.getWorkout)
route.post('/workout-data/create', workout.create)

module.exports = route
