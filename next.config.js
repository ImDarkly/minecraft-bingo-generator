/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/minecraft-bingo-generator',
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
