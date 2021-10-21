const { Router } = require('express');

const route = Router();
const {
  getData,
  addValue,
  updateValue,
  deleteValue
} = require('../../controller/v1/health-check')

route
  .get('health-check', getData)
  .post('health-check', addValue)
  .put('health-check', updateValue)
  .delete('health-check', deleteValue);

module.exports = route;