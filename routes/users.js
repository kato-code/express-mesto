// const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');

// const {
//   getUsers,
//   getUserProfile,
//   getUserProfileById,
//   updateUserProfile,
//   updateUserAvatar,
// } = require('../controllers/users.js');

// // получить список юзеров
// router.get('/users', getUsers);

// // получить информацию о текущем юзере
// router.get('/users/me', getUserProfile);

// // получить информацию о юзере по id
// router.get('/users/:userId', celebrate({
//   params: Joi.object().keys({
//     userId: Joi.string().required().length(24).hex(),
//   }),
// }), getUserProfileById);

// // обновить информацию в профиле юзера
// router.patch('/users/me', celebrate({
//   body: Joi.object().keys({
//     name: Joi.string().required().min(2).max(30),
//     about: Joi.string().required().min(2).max(30),
//   }),
// }), updateUserProfile);

// // обновить аватар в профиле юзера
// router.patch('/users/me/avatar', celebrate({
//   body: Joi.object().keys({
//     avatar: Joi.string().required().pattern(/^https?:\/\/(www\.)?.+#?$/),
//   }),
// }), updateUserAvatar);

// module.exports = router;
const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUserById, getCurrentUser, updateProfileInfo, updateAvatar,
} = require('../controllers/users');

// Запрос списка пользователей
router.get('/users', getUsers);

// Запрос информации о текущем пользователе
router.get('/users/me', getCurrentUser);

// Запрос информации о пользователе по id
router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
}), getUserById);

// Запрос на обновление информации в профиле
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateProfileInfo);

// Запрос на обновление аватара пользователя
router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    // eslint-disable-next-line no-useless-escape
    avatar: Joi.string().required().pattern(/https?:\/\/w{0,3}[a-z0-9-._~:\/?#[\]@!$&'()*+,;=]{0,}/i),
  }),
}), updateAvatar);

module.exports = router;
