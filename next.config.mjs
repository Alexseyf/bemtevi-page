/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitando o suporte nativo para styled-components
  compiler: {
    styledComponents: {
      displayName: true, // Facilita a depuração em ambiente de desenvolvimento
      ssr: true,         // Garante renderização do lado do servidor
    },
  },
  // Desativando a otimização de imagens para evitar problemas
  images: {
    unoptimized: true,
  },
  // Configuração para rotas estáticas
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/public/images/:path*',
      },
    ];
  },
};

export default nextConfig;
