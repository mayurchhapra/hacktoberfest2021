const healthCheck = require('./v1/health-check');

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
    'health-check': healthCheck
  });
};