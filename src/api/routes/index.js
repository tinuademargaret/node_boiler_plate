const express = require('express');
parentRouter = express.Router();

const welcomeRoute = require('../routes/welcomeroutes');
welcomeRoute(parentRouter);

module.exports = parentRouter;
