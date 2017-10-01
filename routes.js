// Import Endpoints
const user = require('./api/user');

// Insert routes below
module.exports = (app) => {

  app.use('/api/user', user);
};