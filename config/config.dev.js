const env = 'development';
const port = 3000;
const hostname = 'localhost';

module.exports = {
  name: 'Sephora',
  env,
  port,
  hostname,
  session: {
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  },
  database: {
    adapters: {
      default: '',
    },
    connections: {
      default: {
        adapter: 'default',
      },
    },
    defaults: {
      migrate: 'alter',
    },
  },
};
