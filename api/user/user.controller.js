const userModel = require('./user.model');
const service = require('../../services/auth.services');

const create = (req, res) => {
  if (!req.body) {
    return res.status(500).json({ message: 'not have payload' });
  }
  userModel.create(req.body, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'error creating user' });
    }
    if (user) {
      console.log(user);
      return res.status(201).send({ mensagge: 'Save', token: service.createToken(user) });
    }
  });
};

const getAll = (req, res) => {
  userModel.getAll((err, user) => {
    if (err) {
      return res.status(500).json({ error: 'error al listar user' });
    }
    return res.status(200).send(user);
  });
};


const remove = (req, res) => {
  // console.log(req.params);
  userModel.remove(req.params.userId, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'error deleting user' })
    }
    if (user) {
      return res.status(200).json(user);
    }
  });
};

module.exports = {
  create,
  getAll,
  remove,
};