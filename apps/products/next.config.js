const NextFederationPlugin = require('@module-federation/nextjs-mf');
const path = require("path");

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    esmExternals: false,
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  compiler:{
    styledComponents: true
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'products',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './pdp': './src/pages/pdp/[...slug]'
            },
            shared:{
              '@emotion/': {
                eager: true,
                requiredVersion: false,
                singleton: true,
              },
              '@chakra-ui/': {
                eager: true,
                requiredVersion: false,
                singleton: true,
              },
            }
      })
    );

    return config;
  },
};
