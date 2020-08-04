const router = require('express').Router();
const apiFirmsRoter = require('./api/films');

router.use('/films', apiFirmsRoter);

module.exports = router;