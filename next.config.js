module.exports = async () => {
    return {
        swcMinify: true,
        reactStrictMode: true,
        trailingSlash: false,
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: '**',
                },
            ],
        },
    };
};
