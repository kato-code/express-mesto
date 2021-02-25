/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routesUsers = require('./routes/users.js');
const routesCards = require('./routes/cards.js');
const routeNotFound = require('./routes/routeNotFound.js');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to DB'));

app.use((req, res, next) => {
  req.user = {
    _id: '60361a76f9ed059126fcfe1b',
  };
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routesUsers);
app.use('/', routesCards);
app.use('/', routeNotFound);

app.listen(PORT, () => {
  console.log(`On port ${PORT}`);
});
