const express = require('express');
const router = express.Router();

const here = 'rate';
const Model = require(`../models/${here}.model`);

require('../middlewares/core/defaultMiddlewares')(router, here, Model);

module.exports = router;
