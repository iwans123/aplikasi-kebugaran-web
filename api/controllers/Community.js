// const validation = require('express-validator')
const Community = require('../models/Community')

module.exports.getAllCommunity = (request, response, next) => {
  Community.find({}, (error, community) => {
    if (error) {
      return response.status(500).json({
        message: 'Failed to retrieve data.'
      })
    }
    return response.json(community)
  })
}

module.exports.getCommunityById = (request, response) => {
  const id = request.params.id
  Community.findOne({ _id: id }, (error, community) => {
    if (error) {
      return response.status(500).json({
        message: 'Failed to retrieve community data'
      })
    }
    if (!community) {
      return response.status(404).json({
        message: 'Community not found!'
      })
    }
    return response.json(community)
  })
}

module.exports.getCommunityByCity = (request, response) => {
  const cityName = request.params.city
  Community.find({ city: cityName }, (error, community) => {
    if (error) {
      return response.status(500).json({
        message: 'Failed to retrieve community data'
      })
    }
    if (!community) {
      return response.status(404).json({
        message: 'Could not find community in this city'
      })
    }
    return response.json(community)
  })
}
