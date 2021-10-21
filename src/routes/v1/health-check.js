const { Router } = require('express');

const route = Router();
const { getData } = require('../../controller/v1/health-check')

route.get('health-check', getData);

module.exports = route;