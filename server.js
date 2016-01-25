'use strict';

const path = require('path');
const Hapi = require('hapi');
// const GoodBunyanReporter = require('good-bunyan');

// const logLevel = 'debug';
// const logger = require('./server-logger')(logLevel);

const server = new Hapi.Server();
const port = process.env.PORT || 3000;

server.connection({ port });

server.register([
  { register: require('inert') },
  { register: require('good'),
    options: {
      opsInterval: 5000,
      reporters: [{
        reporter: require('good-console'),
        events: { ops: '*', log: '*', request: '*', response: '*' }
      }
      // ,
      // {
      //   reporter: GoodBunyanReporter,
      //   events: { log: '*' },
      //   config: { logger }
      // }
      ]
    }
  }
], (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply.file(path.join(__dirname, 'index.html'));
    }
  });

  server.route({
    method: 'GET',
    path: '/static/hat-bundle.js',
    handler(request, reply) {
      reply.file(path.join(__dirname, 'build', 'hat-bundle.js'));
    }
  });

  server.route({
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'static'),
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.start((startErr) => {
    if (startErr) {
      throw startErr;
    }

    server.log('info', `Server running at ${server.info.uri}`);
  });
});
