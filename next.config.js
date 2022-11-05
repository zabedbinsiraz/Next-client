/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     fontLoaders: [
//       { loader: '@next/font/google', options: { subsets: ['latin'] } },
//     ],
//   },
// }
