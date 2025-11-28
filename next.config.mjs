/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitando o suporte nativo para styled-components
  compiler: {
    styledComponents: {
      displayName: true, // Facilita a depuração em ambiente de desenvolvimento
      ssr: true,         // Garante renderização do lado do servidor
    },
  },
  // Configuração de imagens otimizadas
  images: {
    unoptimized: false, // Garantir que as imagens sejam otimizadas
    domains: [],
    remotePatterns: [],
  },
};

export default nextConfig;
