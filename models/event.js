const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
  theme: { type: String, require: true },
  detail: { type: String, require: true},
  choices: [{
    name: { type: String, require: true }
  }],
  password: String
});

module.exports = mongoose.model('Event', Event);
