const { Router } = require('express');
const {
    cities,
} = require('../controllers/weather');

const router = Router();

router.get('/cities', test);

module.exports = router;