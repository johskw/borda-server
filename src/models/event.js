const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
  theme: { type: String, require: true, minlength: [1, 'テーマを入力してください']},
  detail: { type: String, require: true },
  choices: [{
    name: { type: String, require: true, minlength: [1, '選択肢を入力してください'] }
  }],
  password: { type: String, require: true, minlength: [6, 'パスワードは6文字以上で入力してください'] }
});

module.exports = mongoose.model('Event', Event);
