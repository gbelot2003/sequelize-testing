const router = require('express').Router();
const webAuth = require('./web/auth');

router.use('/', webAuth);

module.exports = router;