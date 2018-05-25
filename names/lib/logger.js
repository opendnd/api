const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf, splat } = format;
const { Console } = transports;

const simple = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const logger = createLogger({
  silent: (process.env.NODE_ENV === 'test'),
  format: combine(
    splat(),
    timestamp(),
    simple,
  ),
  transports: [new Console()],
  exitOnError: false,
});

module.exports = logger;
