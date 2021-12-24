import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema({
  name: { type: String, required: true },
  email: { type: String, index: { unique: true }, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.models.User || mongoose.model('User', User)
