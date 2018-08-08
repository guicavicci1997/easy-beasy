const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Question = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  opt1: {
    type: String
  },
  opt2: {
    type: String
  },
  opt3: {
    type: String
  },
  opt4: {
    type: String
  },
  img: {
    type: String
  }
});

module.exports = mongoose.model('Question', Question);