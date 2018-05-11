'use strict';

const express = require('express');
const app = express();
const { resolve } = require('path');
const server = require('./');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const chalk = require('chalk');

// logging middleware
app.use(morgan('dev'));

// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// prepend '/api' to URIs
app.use('/api', server);

// serve static files from public
app.use(express.static(resolve(__dirname, '..', '..', 'www')))

// request any page and receive index.html
app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', '..', 'www/index.html')));

// server listening!
app.listen(process.env.PORT || 3000, () => {
  console.log(chalk.cyan('Server is listening'), chalk.yellow('http://localhost:3000'));
});