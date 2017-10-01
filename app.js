const express = require('express');
const http = require('http');
const config = require('./config/config');
const expressConfig = require('./config/express');
const routeConfig = require('./routes');

const app = express();
const server = http.createServer(app);
// app.get('/', (req, res) => {
//   res.status(200).send('welcome');
// });

expressConfig(app);
routeConfig(app);

// app.listen(config.port, () => {
//   console.info(`Aplicación conectada en el puerto:${config.port} y corriendo correctamente.`);
// });

function startServer() {
  server.listen(config.port, () => {
    console.info(`Aplicación conectada en el puerto:${config.port} y corriendo correctamente.`);
  });
}

setImmediate(startServer);