const healthCheck = require('./v1/health-check');
const sureshmController = require('./v1/sureshm');

const mayur = require('./v1/mayur')

const defineRoute = (application, versionTag, controllers) => {
  const versionPath = versionTag ? `/${versionTag}/` : `/`;
  for (const controller in controllers) {
    const path = versionPath + controller;
    console.log("Routes: ", path);
    application.use(path, controllers[controller]);
  }
};

module.exports = (app) => {
  defineRoute(app, "v1", {
    'health-check': healthCheck,
    'mayur': mayur,
    'sureshm': sureshmController
  });
};