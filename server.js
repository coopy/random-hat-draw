'use strict';

const path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Good = require('good');
const GoodConsole = require('good-console');
// const GoodBunyanReporter = require('good-bunyan');

// const logLevel = 'debug';
// const logger = require('./server-logger')(logLevel);

const DEFAULT_PORT = 3000;
const server = new Hapi.Server();
const port = process.env.PORT || DEFAULT_PORT;

server.connection({ port });

server.register([
  { register: Inert },
  { register: Good,
    options: {
      opsInterval: 5000,
      reporters: [{
        reporter: GoodConsole,
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
