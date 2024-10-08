/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**'
            }, {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**'
            }, {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
