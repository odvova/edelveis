const withTM = require('next-transpile-modules')([
  'react-syntax-highlighter',
  'swagger-client',
  'swagger-ui-react',
]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Enable ES modules for Swagger UI package
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
});
