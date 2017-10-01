const services = require('../services/auth.services');

function isAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ menssage: 'No tienes autorizacion' });
  }

  const token = req.headers.authorization.split(' ')[1];
  services.decodeToken(token)
    .then((response) => {
      console.log(response);
      req.user = response;
      res.status(response.status).send(response);
      next();
    }).catch((response) => {
      res.status(response.status).send(response);
    });
}
module.exports = isAuthenticated;