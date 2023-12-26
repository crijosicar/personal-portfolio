const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = async (phase) => {
    const domains = phase === PHASE_DEVELOPMENT_SERVER ? ['localhost', 'fastly.picsum.photos'] : [];

    return {
        swcMinify: true,
        reactStrictMode: true,
        trailingSlash: true,
        images: {domains},
    }
}
