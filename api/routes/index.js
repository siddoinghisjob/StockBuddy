const router = require('express').Router();
const controller = require('../controller');
const validator = require('../middleware/');

router.post('/register', validator.register ,controller.register);
router.post('/login', validator.login, controller.login);
router.get('/auth', validator.auth, controller.auth);
router.get('/rankings/:id', validator.id, controller.rankings.getUser);
router.get('/rankings', controller.rankings.get);

module.exports = router;