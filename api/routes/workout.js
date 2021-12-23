const { Router } = require('express')
const route = Router()

const workouts = require('../controllers/Workout')
route.post('/workout/add', workouts.addWorkout)
route.put('/workout/update', workouts.updateWorkout)
route.get('/workout/view', workouts.getWorkout)

module.exports = route
