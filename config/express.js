/**
 * Express configuration
 * @author: Juan Estiven Mazo <estivenm930@gmail.com>
 */

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const compression = require('compression');

// import path from 'path';

module.exports = (app) => {
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(methodOverride());
  app.use(errorHandler());
};