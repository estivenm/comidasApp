const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config');

// code token
function createToken(data) {
  const payload = {
    sub: data,
    iat: moment().unix(),
    exp: moment().add(10, 'days').unix()
  };
  return jwt.encode(payload, config.SECRET_TOKEN);
}

// decode token
function decodeToken(token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN);
      if (payload.exp <= moment.unix()) {
        reject({
          status: 500,
          menssage: 'token expirado',
        });
      }
      resolve(payload.sub);
    } catch (error) {
      reject({
        status: 500,
        menssage: 'token invalido',
      });
    }
  });
  return decoded;
}

module.exports = {
  createToken,
  decodeToken,
};