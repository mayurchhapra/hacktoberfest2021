const { Router } = require('express');

const route = Router();
const {
  getData
} = require('../../controller/v1/maahi')

route
  .get('maahi', getData)

module.exports = route;