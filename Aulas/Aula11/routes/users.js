var express = require('express');
var router = express.Router();

const contorller = require('../controllers/users')

router.post('/', contorller.criar)

router.post('/login', contorller.entrar)

module.exports = router;

