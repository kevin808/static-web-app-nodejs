/** @type {import('next').NextConfig} */

const nextConfig = {

  	images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'klisto.blob.core.windows.net',
          port: '',
          pathname: '/blobtest/**',
        },
      ],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  	output: 'standalone'
}

module.exports = nextConfig
