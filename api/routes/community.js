const { Router } = require('express')
const route = Router()

const community = require('../controllers/Community')

route.get('/community', community.list)
route.get('/community/:id', community.getCommunityById)

module.exports = route
