const serverless = require('aws-serverless-express');
const appPromise = require('./app');

const serverPromise = appPromise.then((app) => serverless.createServer(app));

exports.handler = (event, context) => {
  serverPromise
    .then((server) => serverless.proxy(server, event, context));
};
