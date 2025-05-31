/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true, // Isso permite que as imagens sejam renderizadas sem otimização, o que pode ajudar em problemas de carregamento
  },
  // Garantir que o publicPath esteja configurado corretamente
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
