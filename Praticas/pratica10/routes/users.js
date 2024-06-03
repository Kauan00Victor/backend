var express = require('express');
const fs = require("fs")
const yaml = require("yaml")
const swaggerUI = require("swagger-ui-express");

const file = fs.readFileSync('./swagger.yaml', 'utf-8');
const swaggerDoc = yaml.parse(file);
const router = express.Router();

const controller = require('../controllers/users')

router.use('/', swaggerUI.serve);
router.use('/', swaggerUI.setup(swaggerDoc));

module.exports = router;

