const User = require('../models/user.js');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

const getUserId = (req, res) => {
  User.findById(req.params._id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Пользователь с таким id не найден' });
        return;
      }
      res.status(200).send(user);
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        res.status(400).send({ message: 'Введены некорректные данные' });
      } else if (error.name === 'NotFound') {
        res.status(404).send({ message: 'Пользователь с таким id не найден' });
      } else {
        res.status(500).send({ message: 'На сервере произошла ошибка' });
      }
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        res.status(400).send({ message: 'Введены некорректные данные' });
      } else {
        res.status(500).send({ message: 'На сервере произошла ошибка' });
      }
    })
    .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

const updateUserProfile = (req, res) => {
  const { name, about } = req.body;
  return User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (user === null) {
        res.status(404).send({ message: 'Пользователь с таким id не найден' });
        return;
      }
      res.status(200).send(user);
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        res.status(400).send({ message: 'Введены некорректные данные' });
      } else if (error.name === 'DocumentNotFoundError') {
        res.status(404).send({ message: 'Пользователь с таким id не найден' });
      } else {
        res.status(500).send({ message: 'На сервере произошла ошибка' });
      }
    });
};

const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => res.status(200).send(user))
    .catch((error) => {
      if (error.name === 'CastError') {
        res.status(400).send({ message: 'Введены некорректные данные' });
      } else if (error.name === 'NotFound') {
        res.status(404).send({ message: 'Пользователь с таким id не найден' });
      } else {
        res.status(500).send({ message: 'На сервере произошла ошибка' });
      }
    });
};

module.exports = {
  getUsers,
  getUserId,
  createUser,
  updateUserProfile,
  updateUserAvatar,
};
