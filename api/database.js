import mongoose from 'mongoose'
const uri = 'mongodb+srv://admin1:p0qAhR7vw8ALN87I@cluster0.ive06.mongodb.net/kalistenik?retryWrites=true&w=majority'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback () {
  // eslint-disable-next-line no-console
  console.log('Connection success')
})

module.exports = db
