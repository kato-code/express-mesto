/* eslint-disable max-len */
// require('dotenv').config();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const { NODE_ENV, JWT_SECRET } = process.env;

// const User = require('../models/user.js');

// const BadRequestError = require('../errors/BadRequestError.js');
// const ConflictError = require('../errors/ConflictError.js');
// const NotFoundError = require('../errors/NotFoundError.js');
// const UnauthorizedError = require('../errors/UnauthorizedError.js');

// // получить список юзеров
// const getUsers = (req, res, next) => {
//   User.find({})
//     .then((users) => res.status(200).send(users))
//     .catch(next);
// };

// // получить информацию о текущем юзере
// const getUserProfile = (req, res, next) => {
//   const userId = req.user._id;

//   User.findById(userId)
//     .then((user) => {
//       if (!user) {
//         throw new NotFoundError('Пользователь с таким id не найден');
//       }
//       res.status(200).send(user);
//     })
//     .catch((error) => {
//       if (error.name === 'CastError') {
//         throw new BadRequestError('Пользователь с таким id не найден');
//       }
//       next(error);
//     });
// };

// // получить информацию о юзере по id
// const getUserProfileById = (req, res, next) => {
//   const { userId } = req.params;

//   User.findById(userId)
//     .then((user) => {
//       if (!user) {
//         throw new NotFoundError('Пользователь с таким id не найден');
//       }
//       res.status(200).send(user);
//     })
//     .catch((error) => {
//       if (error.name === 'CastError') {
//         throw new BadRequestError('Пользователь с таким id не найден');
//       }
//       next(error);
//     });
// };

// // создать нового юзера
// const createUser = (req, res, next) => {
//   const {
//     name, about, avatar, email, password,
//   } = req.body;

//   User.findOne({ email })
//     .then((data) => {
//       if (data) {
//         throw new ConflictError('Пользователь уже существует');
//       }
//       return bcrypt.hash(password, 10)
//         .then((hash) => User.create({
//           name, about, avatar, email, password: hash,
//         }))
//         .then((user) => res.status(200).send({
//           name: user.name,
//           about: user.about,
//           avatar: user.avatar,
//           email: user.email,
//         }))
//         .catch((error) => {
//           if (error.name === 'ValidationError') {
//             throw new BadRequestError('Введены некорректные данные');
//           }
//           next(error);
//         });
//     });
// };

// // обновить информацию в профиле юзера
// const updateUserProfile = (req, res, next) => {
//   const { name, about } = req.body;

//   return User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
//     .then((user) => {
//       if (!user) {
//         throw new NotFoundError('Пользователь с таким id не найден');
//       }
//       res.status(200).send(user);
//     })
//     .catch((error) => {
//       if (error.name === 'CastError') {
//         throw new BadRequestError('Введены некорректные данные');
//       }
//       if (error.name === 'ValidationError') {
//         throw new BadRequestError('Введены некорректные данные');
//       }
//       next(error);
//     });
// };

// // обновить аватар в профиле юзера
// const updateUserAvatar = (req, res, next) => {
//   const { avatar } = req.body;

//   return User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
//     .then((user) => {
//       if (!user) {
//         throw new NotFoundError('Пользователь с таким id не найден');
//       }
//       res.status(200).send(user);
//     })
//     .catch((error) => {
//       if (error.name === 'CastError') {
//         throw new BadRequestError('Введены некорректные данные');
//       }
//       if (error.name === 'ValidationError') {
//         throw new BadRequestError('Введены некорректные данные');
//       }
//       next(error);
//     });
// };

// // аутентификация
// const loginUser = (req, res, next) => {
//   const { email, password } = req.body;

//   return User.findUserByCredentials(email, password)
//     .then((user) => {
//       if (!user) {
//         throw new UnauthorizedError('Пользователь не зарегистрирован');
//       }
//       const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
//       res.send({ token });
//     })
//     .catch((error) => {
//       next(error);
//     });
// };

// module.exports = {
//   getUsers,
//   getUserProfile,
//   getUserProfileById,
//   createUser,
//   updateUserProfile,
//   updateUserAvatar,
//   loginUser,
// };

require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

// Запрос списка пользователей
const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

// Запрос информации о текущем пользователе
const getUserProfile = (req, res, next) => {
  const userId = req.user._id;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      } else {
        res.status(200).send({ data: user });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Нет пользователя с таким id');
      } else {
        next(err);
      }
    });
};

// Запрос информации о пользователе по id
const getUserProfileById = (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      } else {
        res.status(200).send({ data: user });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Нет пользователя с таким id');
      } else {
        next(err);
      }
    });
};

// Запрос на создание пользователя
const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  User.findOne({
    email,
  })
    .then((data) => {
      if (data) {
        throw new ConflictError('Пользователь с таким email уже существует.');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((user) => res.status(200).send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      email: user.email,
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else {
        next(err);
      }
    });
};

// Контроллер аутентификации
const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .catch(() => {
      throw new UnauthorizedError('Требуется авторизация');
    })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
};

// Запрос на обновление информации в профиле
const updateUserProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      } else {
        res.status(200).send({ data: user });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Нет пользователя с таким id');
      } else if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else {
        next(err);
      }
    });
};

// Запрос на обновление аватара пользователя
const updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      } else {
        res.status(200).send({ data: user });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Нет пользователя с таким id');
      } else if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else {
        next(err);
      }
    });
};

module.exports = {
  getUsers,
  getUserProfile,
  getUserProfileById,
  createUser,
  updateUserProfile,
  updateUserAvatar,
  loginUser,
};
