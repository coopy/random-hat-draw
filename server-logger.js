'use strict';

const Bunyan = require('bunyan');

let env = 'dev';
if (process.env.NODE_ENV === 'production') {
  env = 'prod';
}

const name = `hat-draw-${env}`;

module.exports = (level) => {
  return Bunyan.createLogger({
    name,
    streams: [{
      level,
      stream: process.stdout
    }]
  });
};
