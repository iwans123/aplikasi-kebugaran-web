import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Workout = new Schema({
  name: { type: String, required: true },
  days: { type: String, required: true },
  exercises: { type: Array }
})

module.exports = mongoose.model('Workout', Workout)
