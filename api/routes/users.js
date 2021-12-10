const { Router } = require('express')
const route = Router()

const users = require('../controllers/User')
route.post('/user/register', users.register)
route.post('/user/login', users.login)
route.get('/user/view', users.user)

module.exports = route
