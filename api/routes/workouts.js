const { Router } = require('express')
const route = Router()

const workouts = require('../controllers/Workout')
route.post('/user/register', workouts.register)
route.post('/user/login', workouts.login)
route.get('/user/view', workouts.user)

module.exports = route
