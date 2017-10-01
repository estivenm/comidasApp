const controller = require('./user.controller');
const { Router } = require('express');

const auth = require('../../Auth/index');

const router = new Router();
router.post('/', controller.create);
router.get('/', controller.getAll);
router.delete('/:userId', auth, controller.remove);


module.exports = router;