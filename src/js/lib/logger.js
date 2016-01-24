/* eslint-disable no-unused-expressions, no-console */
function log() {
  window && window.console && window.console.log(arguments);
}

function warn() {
  window && window.console && window.console.warn(arguments);
}

function error() {
  window && window.console && window.console.error(arguments);
}
/* eslint-enable no-unused-expressions, no-console */

const logger = {
  trace: log,
  debug: log,
  info: log,
  warn,
  error
};

export default logger;
