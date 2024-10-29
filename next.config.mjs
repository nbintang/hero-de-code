/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com',
                pathname: '/photos/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'api.unsplash.com',
                pathname: '/photos/**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com', 
            },
        ],
    },
};


export default nextConfig;
