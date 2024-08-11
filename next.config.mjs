/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    generateBuildId: async () => {
        return 'ver-1-' + new Date().getTime()
    }
};

export default nextConfig;
