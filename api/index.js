const express = require('express')
const users = require('./routes/users')
// eslint-disable-next-line no-unused-vars
const db = require('./database')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(users)

module.exports = {
  path: '/api',
  handler: app
}
