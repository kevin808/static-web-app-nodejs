/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: false,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'standalone'
}

module.exports = nextConfig

// module.exports = {
//   output: "standalone",
// };
