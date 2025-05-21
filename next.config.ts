import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
