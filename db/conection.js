const mysql = require('mysql');
const config = require('../config/config');

const connection = mysql.createConnection(config.db);

connection.connect((error) => {
  if (error) {
    console.error(`error connecting: ${error.stack}`);
    return;
  }
  console.log('conectado con la base de datos');
});

exports.connection = connection;