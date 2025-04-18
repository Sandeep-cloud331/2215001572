const express = require('express');
const mathController = require('../controller/mathController')

const Router = express.Router();

Router.post('/e',mathController.getNumbers)

module.exports = Router;