const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = async (phase) => {
    const remotePatterns =
        phase === PHASE_DEVELOPMENT_SERVER
            ? [
                  {
                      protocol: 'http',
                      hostname: 'localhost',
                  },
                  {
                      protocol: 'http',
                      hostname: 'fastly.picsum.photos',
                  },
                  {
                      protocol: 'https',
                      hostname: 'images.prismic.io',
                  },
              ]
            : [];

    return {
        swcMinify: true,
        reactStrictMode: true,
        trailingSlash: true,
        images: { remotePatterns },
    };
};
