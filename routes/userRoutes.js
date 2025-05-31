const express = require('express');
const routes = express.Router();
const userController = require('../controller/userController');
const getController = require('../controller/getController');

// all POST api's routes
routes.post('/staff', userController.staff);


// all get api routes
routes.get('/staff_get', getController.staff_get);

module.exports = routes;
