const bd = require('../../db/conection');

const create = (user, cb) => {
  console.log(user);
  bd.connection.query('INSERT INTO user (nombre, apellido) VALUES (?,?)', [user.nombre, user.apellido],
    // bd.conection.query('INSERT INTO user set ?', req.body,
    (err, resul) => {
      if (err) {
        console.log(err);
        bd.connection.end();
        return cb(err);
      }
      console.log(resul);
      // bd.connection.end();
      return cb(null, resul.insertId);
    });
};

const getAll = (cb) => {
  bd.connection.query('SELECT * FROM user', (err, resul) => {
    if (err) {
      console.error(`error ${err}`);
      // return res.status(500).json({ menssage: ' error the server.' });
      bd.connection.end();
      return cb(err);
    }
    // bd.connection.end();
    // console.log(resul);
    return cb(null, resul);
    // return res.status(200).json(resul);
  });
};

const remove = (idUser, cb) => {
  console.log(idUser);
  bd.connection.query('DELETE FROM user WHERE id > ?', idUser, (err, resul) => {
    if (err) {
      // bd.connection.end();
      return cb(err);
    }
    // bd.connection.end();
    return cb(null, resul);
  });
};
module.exports = {
  create,
  getAll,
  remove,
};