import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    staticPageGenerationTimeout: 60,
    images: {
        unoptimized: false,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            new URL("https://unwavering-card-a95a991f83.media.strapiapp.com/**"),
            new URL("https://cms.bki.co.id/**"),
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
        ],
    },
};

export default nextConfig;
