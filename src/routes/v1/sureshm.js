const { Router } = require('express');

const route = Router();

const {
    getData,
} = require('../../controller/v1/sureshm')

route.get('/sureshm', getData)

module.exports = route;