const express = require('express');
const app = express();

// We are returning a promise of the app so that
// we can easily add in connections for databases
// and such like in the future
module.exports = new Promise((resolve, reject) => {
  const helmet = require('helmet');
  const serverlessMiddleware = require('aws-serverless-express/middleware');

  app.use(helmet());
  app.use(serverlessMiddleware.eventContext());

  app.get('/', (req, res) => {
    res.status(200)
      .set('Content-Type', 'text/plain')  
      .end('Hello world!');
  });

  app.listen(3000, (err) => {
    if (err) {
      reject(err);
    }
    else {
      resolve(app);
    }
  });
});
