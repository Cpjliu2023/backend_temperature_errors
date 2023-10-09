// app.js
const express = require('express');
const bodyParser = require('body-parser');
const tempController = require('./controllers/tempController');
const errorsController = require('./controllers/errorsController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', tempController);
app.use('/', errorsController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
