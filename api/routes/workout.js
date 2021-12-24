const { Router } = require('express')
const route = Router()

const workout = require('../controllers/Workout')

route.get('/workout-data', workout.getWorkout)
route.post('/workout-data/create', workout.create)
route.put('/workout-data/update/:id', workout.update)
route.delete('/workout-data/delete/:id', workout.delete)
route.put('/workout-data/delete/:id/:exid', workout.deleteex)

module.exports = route
