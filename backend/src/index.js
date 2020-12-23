/*
    Proyecto Gaming-It
    API
*/
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const database = require('../config/database')

const app = express();

// Connecting to MongoDB
mongoose.connect(database.remoteUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }) // Para que no nos aparezcan los warnings
  .then(db => console.log('Conectado a mongodb'))
  .catch(err => console.log(`Error con mongo: ${err}`));

// Settings
app.set('port', process.env.PORT || 3000);      // Puerto de NGINX, más adelante, puerto que conecta con el frontend

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/games', require('./routes/games'));
app.use('/users', require('./routes/users'));
app.use('/rankings', require('./routes/rankings'));

// Static files
app.use(express.static(__dirname + '/../../frontend/public')) // Agregamos los ficheros que serán estáticos en la app

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

// function createToken(user) {
//   const payload = {
//     sub: user.id,
//     iat: moment().unix(),
//     exp: moment().add(1,'hour').unix(),
//   }
//   return jwt.encode(payload, config.SECRET_TOKEN )
// }
