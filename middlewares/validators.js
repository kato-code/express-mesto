/* eslint-disable max-len */
const { celebrate, Joi } = require('celebrate');

// const signinValidator = celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().required().email().messages({
//       'any.required': 'Обязательное поле',
//     }),
//     password: Joi.string().required().pattern(/^[A-Za-z0-9]/i).messages({
//       'string.min': 'Минимум 2 символа',
//       'string.max': 'Максимум 30 символов',
//       'any.required': 'Обязательное поле',
//     }),
//   }),
// });

// const signupValidator = celebrate({
//   body: Joi.object().keys({
//     name: Joi.string().min(2).max(30),
//     about: Joi.string().min(2).max(30),
//     avatar: Joi.string().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/i),
//     email: Joi.string().required().email().messages({
//       'any.required': 'Обязательное поле',
//     }),
//     password: Joi.string().required().pattern(/^[A-Za-z0-9]/i).messages({
//       'string.min': 'Минимум 2 символа',
//       'string.max': 'Максимум 30 символов',
//       'any.required': 'Обязательное поле',
//     }),
//   }),
// });

module.exports.signinValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'any.required': 'Обязательное поле',
    }),
    password: Joi.string().required().pattern(/^[A-Za-z0-9]/i).messages({
      'string.min': 'Минимум два символа',
      'string.max': 'Максимум 30 символов',
      'any.required': 'Обязательное поле',
    }),
  }),
});

module.exports.signupInfoValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    // eslint-disable-next-line no-useless-escape
    avatar: Joi.string().pattern(/https?:\/\/w{0,3}[a-z0-9-._~:\/?#[\]@!$&'()*+,;=]{0,}/i),
    email: Joi.string().required().email().messages({
      'any.required': 'Обязательное поле',
    }),
    password: Joi.string().required().pattern(/^[A-Za-z0-9]/i).messages({
      'string.min': 'Минимум два символа',
      'string.max': 'Максимум 30 символов',
      'any.required': 'Обязательное поле',
    }),
  }),
});

// module.exports = { signinValidator, signupValidator };
