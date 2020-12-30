const jwt = require('jsonwebtoken');
const config = require('../../config/config_jwt');
const { isUser } = require('./../utilities/Utils');
const User = require('../models/User');

async function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token)
    return res.status(401).send({ auth: false, message: 'No existe el token de acceso' });
  
  try {
    const decoded = await jwt.verify(token, config.secret);
    let user = await isUser(req.params.nickname, User);
    if (decoded.id == user._id) 
      next();
    else
      return res.status(401).send({ auth: false, message: 'Token incorrecto' });
  } catch (err) {
    return res.status(401).send({ auth: false, message: 'Token incorrecto' });
  }
}

module.exports = verifyToken;