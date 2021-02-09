const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/users', (req, res) => {
  fs.readFile(path.join('data', 'users.json'), { encoding: 'utf8' }, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      const users = JSON.parse(data);
      res.send(users);
    }
  });
});

router.get('/users/:id', (req, res) => {
  fs.readFile(path.join('data', 'users.json'), { encoding: 'utf8' }, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      const users = JSON.parse(data);
      const currentUser = users.find((value) => value._id === req.params.id);
      if (currentUser) {
        res.send(currentUser);
      } else {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    }
  });
});

module.exports = router;
