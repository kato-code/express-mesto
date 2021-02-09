const express = require('express');
const path = require('path');

const routeNotFound = require('./routes/routeNotFound.js');
const routesUsers = require('./routes/users.js');
const routesCards = require('./routes/cards.js');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routesUsers);
app.use('/', routesCards);
app.use('/', routeNotFound);

app.listen(PORT, () => {});
