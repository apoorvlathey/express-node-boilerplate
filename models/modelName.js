const mongoose = require('mongoose')

const ModelName = new mongoose.Schema({
  firstname: {type: String,trim: true, default: ''},
  lastname: {type: String,trim: true, default: ''},
  age: {type:Number, default: 0},
  team: {type: String,trim: true, default: ''},
  position: {type: String,trim: true, default: ''}
})

module.exports = mongoose.model('ModelName', ModelName)