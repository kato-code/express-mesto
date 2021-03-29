// const mongoose = require('mongoose');
// const validator = require('validator');

// const cardSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     minlength: 2,
//     maxlength: 30,
//   },
//   link: {
//     type: String,
//     required: true,
//     validate: {
//       validator(i) {
//         // return /^https?:\/\/(www\.)?.+#?$/.test(i);
//         return validator.isURL(i);
//       },
//       message: 'Введите корректный адрес URL',
//     },
//   },
//   owner: {
//     type: mongoose.ObjectId,
//     required: true,
//     ref: 'user',
//   },
//   likes: {
//     type: Array,
//     default: [],
//     ref: 'user',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// },
// // { versionKey: false }
// // eslint-disable-next-line function-paren-newline
// );

// module.exports = mongoose.model('card', cardSchema);
const mongoose = require('mongoose');

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
      validator(url) {
        // eslint-disable-next-line no-useless-escape
        const regex = /https?:\/\/w{0,3}[a-z0-9-._~:\/?#[\]@!$&'()*+,;=]{0,}/i;
        return regex.test(url);
      },
      message: 'Введите URL.',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: Array,
    ref: 'user',
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
