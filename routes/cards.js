const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/cards', (req, res) => {
  fs.readFile(path.join('data', 'cards.json'), { encoding: 'utf8' }, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      const cards = JSON.parse(data);
      res.send(cards);
    }
  });
});

module.exports = router;
