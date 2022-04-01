const express = require('express');
const router = express.Router();

const here = 'movement';
const Model = require(`../models/${here}.model`);

require('../middlewares/core/defaultMiddlewares')(router, here, Model);

module.exports = router;
