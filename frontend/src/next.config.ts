/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Deshabilita el App Router experimental si no lo usas
  experimental: {
    appDir: false
  },
  // Opcional: Configura aliases para imports
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
}

module.exports = nextConfig;