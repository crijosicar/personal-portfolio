module.exports = async (phase) => {
    return {
        swcMinify: true,
        reactStrictMode: true,
        trailingSlash: false,
        images: {
            unoptimized: true,
        },
    };
};
