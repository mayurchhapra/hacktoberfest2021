const { Router } = require('express');

const route = Router();
const {
  getData,
  addValue,
  updateValue,
  deleteValue
} = require('../../controller/v1/sumit')

route
  .get('sumit', getData)
  .post('sumit', addValue)
  .put('sumit', updateValue)
  .delete('sumit', deleteValue);

module.exports = route;