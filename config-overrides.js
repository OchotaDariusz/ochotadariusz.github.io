const path = require('path');

module.exports = function override(config, _env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@app': path.resolve(__dirname, 'src/'),
    },
  };

  return config;
};
