const express = require('express')
const users = require('./routes/users')
const community = require('./routes/community')
const workout = require('./routes/workout')
// eslint-disable-next-line no-unused-vars
const db = require('./database')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(users)
app.use(workout)
app.use(community)

module.exports = {
  path: '/api',
  handler: app
}
