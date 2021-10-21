const { Router } = require('express');

const route = Router();
const {
  getData
} = require('../../controller/v1/mayur')

route
  .get('mayur', getData)

module.exports = route;