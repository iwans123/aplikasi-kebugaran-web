import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Workout = new Schema({
  workoutName: { type: String, required: true },
  days: { type: Array, required: true },
  exercises: { type: Array }
})

module.exports = mongoose.model('Workout', Workout)
