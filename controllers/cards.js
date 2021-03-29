// /* eslint-disable eqeqeq */
// const Card = require('../models/card.js');

// const BadRequestError = require('../errors/BadRequestError.js');
// const NotFoundError = require('../errors/NotFoundError.js');
// const AuthorizationError = require('../errors/AuthorizationError.js');

// // получить список карточек
// const getCards = (req, res, next) => {
//   Card.find({})
//     .then((cards) => res.status(200).send(cards))
//     .catch(next);
// };

// // создать карточку
// const createCard = (req, res, next) => {
//   const { name, link } = req.body;
//   const owner = req.user._id;

//   Card.create({ name, link, owner })
//     .then((card) => res.status(200).send(card))
//     .catch((error) => {
//       if (error.name === 'ValidationError') {
//         throw new BadRequestError('Введены некорректные данные');
//       }
//       next(error);
//     });
// };

// // удалить карточку
// const deleteCard = (req, res, next) => {
//   Card.findById(req.params.cardId)
//     .then((card) => {
//       if (!card) {
//         throw new NotFoundError('Запрашиваемые данные не найдены');
//       }
//       if (card.owner.toString() != req.user._id) {
//         throw new AuthorizationError('Недостаточно прав');
//       }
//       // return Card.findByIdAndDelete(req.params._id);
//       Card.deleteOne(card)
//         .then((data) => {
//           res.send({ messages: `Карточка с id: ${data._id} успешно удалена` });
//         })
//         .catch(next);
//     });
//   // .then(() => {
//   //   res.status(200).send({ messages: 'Карточка удалена' });
//   // })
//   // .catch((error) => {
//   //   if (error.name === 'CastError') {
//   //     throw new BadRequestError('Карточка с таким id не найдена');
//   //   }
//   //   next(error);
//   // });
// };

// // поставить лайк
// const likeCard = (req, res, next) => {
//   Card.findByIdAndUpdate(
//     req.params.cardId,
//     { $addToSet: { likes: req.user._id } },
//     { new: true },
//   )
//     .then((card) => {
//       if (!card) {
//         throw new NotFoundError('Карточка с таким id не найдена');
//       }
//       res.status(200).send(card);
//     })
//     .catch((error) => {
//       if (error.name === 'CastError') {
//         throw new BadRequestError('Карточка с таким id не найдена');
//       }
//       next(error);
//     });
// };

// // убрать лайк
// const dislikeCard = (req, res, next) => {
//   Card.findByIdAndUpdate(
//     req.params.cardId,
//     { $pull: { likes: req.user._id } },
//     { new: true },
//   )
//     .then((card) => {
//       if (!card) {
//         throw new NotFoundError('Карточка с таким id не найдена');
//       }
//       res.status(200).send(card);
//     })
//     .catch((error) => {
//       if (error.name === 'CastError') {
//         throw new BadRequestError('Карточка с таким id не найдена');
//       }
//       next(error);
//     });
// };

// module.exports = {
//   getCards,
//   createCard,
//   deleteCard,
//   likeCard,
//   dislikeCard,
// };

const Card = require('../models/card');

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const AuthorizationError = require('../errors/AuthorizationError');

// Запрос списка карточек
const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(next);
};

// Запрос на создание карточки
const createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else {
        next(err);
      }
    });
};

// Запрос на удаление карточки по идентификатору
const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .catch(() => {
      throw new NotFoundError('Нет карточки с таким id');
    })
    .then((data) => {
      if (req.user._id === data.owner.toString()) {
        Card.findByIdAndRemove({ _id: data._id })
          .then(() => {
            res.status(200).send({ message: 'Карточка успешно удалена' });
          })
          .catch(next);
      } else {
        throw new AuthorizationError('Вы не можете удалять карточки других пользователей');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Нет карточки с таким id');
      } else {
        next(err);
      }
    });
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .catch(() => {
      throw new NotFoundError('Нет карточки с таким id');
    })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Нет карточки с таким id');
      } else {
        next(err);
      }
    });
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .catch(() => {
      throw new NotFoundError('Нет карточки с таким id');
    })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Нет карточки с таким id');
      } else {
        next(err);
      }
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
