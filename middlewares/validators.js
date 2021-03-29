/* eslint-disable max-len */
const { celebrate, Joi } = require('celebrate');

const signinValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'any.required': 'Обязательное поле',
    }),
    password: Joi.string().required().min(8).messages({
      'string.min': 'Минимум 5 символов',
      'string.max': 'Максимум 30 символов',
      'any.required': 'Обязательное поле',
    }),
  }),
});

const signupValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/i),
    email: Joi.string().required().email().messages({
      'any.required': 'Обязательное поле',
    }),
    password: Joi.string().required().min(8).messages({
      'string.min': 'Минимум 5 символов',
      'string.max': 'Максимум 30 символов',
      'any.required': 'Обязательное поле',
    }),
  }),
});

module.exports = { signinValidator, signupValidator };
