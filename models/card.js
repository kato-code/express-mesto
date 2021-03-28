const mongoose = require('mongoose');
// const validator = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(i) {
        return /^https?:\/\/(www\.)?.+#?$/.test(i);
      },
      message: 'Введите корректный адрес URL',
    },
  },
  owner: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'user',
  },
  likes: {
    type: Array,
    default: [],
    ref: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
// { versionKey: false }
// eslint-disable-next-line function-paren-newline
);

module.exports = mongoose.model('card', cardSchema);
