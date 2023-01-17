const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Plese add a name']
  },
  email: {
    type: String,
    required: [true, 'Plese add an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Plese add a pasword']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
