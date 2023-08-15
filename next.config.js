/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp3|wav)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/',
            outputPath: 'static/',
          },
        },
      ],
    });

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      },
    ]
  },
};

module.exports = nextConfig;
