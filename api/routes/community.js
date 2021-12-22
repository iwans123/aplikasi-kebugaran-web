const { Router } = require('express')
const route = Router()

const community = require('../controllers/Community')

route.get('/community-data', community.getAllCommunity)
route.get('/community-data/:city', community.getAllCommunity)
route.get('/community-data/:id', community.getCommunityById)

module.exports = route
