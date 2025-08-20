/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // since you’re deploying to GitHub Pages
  basePath: "/Dhaamai",
  assetPrefix: "/Dhaamai/",
  images: {
    unoptimized: true, // disable Next.js image optimization (needed for static export)
  },
};



export default nextConfig;
