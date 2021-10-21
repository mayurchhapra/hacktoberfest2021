const { Router } = require('express');

const route = Router();
const {
  getData,
  addValue
} = require('../../controller/v1/health-check')

route
  .get('health-check', getData)
  .post('health-check', addValue)

module.exports = route;