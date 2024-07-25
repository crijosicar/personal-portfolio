module.exports = async () => {
    return {
        swcMinify: true,
        reactStrictMode: true,
        trailingSlash: false,
        images: {
            unoptimized: true,
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: '**',
                },
            ],
        },
    };
};
