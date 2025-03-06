/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        loader:'custom',
        loaderFile:"./utils/imageLinkGenerator.js"
    },
    distDir:"build"
};

export default nextConfig;
