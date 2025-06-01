import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escola de Educação Infantil Bem-te-vi | Pelotas",
  description: "Um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho. Educação infantil de qualidade, turno inverso e atividades extracurriculares em Pelotas.",
  keywords: ["escola infantil", "educação infantil", "bem-te-vi", "pelotas", "turno inverso", "pré-escola", "berçário", "maternal", "jardim de infância", "escola particular pelotas"],
  authors: [{ name: "Escola Infantil Bem-te-vi" }],
  creator: "Escola Infantil Bem-te-vi",
  publisher: "Escola Infantil Bem-te-vi",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.escolabemtevi.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Escola de Educação Infantil Bem-te-vi | Pelotas",
    description: "Um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho. Educação infantil de qualidade em Pelotas.",
    url: "https://www.bemtevi.com.br",
    siteName: "Escola Infantil Bem-te-vi",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo-nome.png",
        width: 800,
        height: 600,
        alt: "Logo Escola Infantil Bem-te-vi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escola de Educação Infantil Bem-te-vi | Pelotas",
    description: "Um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho. Educação infantil de qualidade em Pelotas.",
    images: ["/images/logo-nome.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/images/logo-header.png',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/images/logo-header.png',
      type: 'image/png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo-header.png" />
        <link rel="apple-touch-icon" href="/images/logo-header.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Escola de Educação Infantil Bem-te-vi",
            "description": "Um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho. Educação infantil de qualidade em Pelotas.",
            "url": "https://www.escolabemtevi.com.br",
            "logo": "https://www.escolabemtevi.com.br/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Quinze de Novembro, 869",
              "addressLocality": "Pelotas",
              "addressRegion": "RS",
              "postalCode": "96015-000",
              "addressCountry": "BR"
            },
            "telephone": "+55 53 99128-0638",
            "email": "escolabemteviinfantil@gmail.com",
            "sameAs": [
              "https://www.instagram.com/bemteviescolainfantil/",
              "https://www.facebook.com/escolainfantilbemtevi/?locale=pt_BR"
            ]
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
