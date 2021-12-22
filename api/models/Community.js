import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Community = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String },
  contactInfo: { type: String },
  instagram: { type: String },
  location: { type: String, required: true },
  schedule: { type: String, required: true }
})

module.exports = mongoose.model('Community', Community)
