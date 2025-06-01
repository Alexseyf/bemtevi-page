"use client";

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurClasses from '../components/OurClasses';
import InverseShift from '../components/InverseShift';
import ExtraActivities from '../components/ExtraActivities';
// import PhotoGallery from '../components/PhotoGallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppFloat from '../components/WhatsAppFloat';
// import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      {/* Componente de cabeçalho com navegação */}
      <Header />
      
      {/* Seção principal com imagem de fundo e chamada para ação */}
      <Hero />
      
      {/* Seção sobre a escola e sua proposta */}
      <AboutUs />
      
      {/* Seção com as turmas oferecidas */}
      <OurClasses />
      
      {/* Seção sobre o turno inverso */}
      <InverseShift />
      
      {/* Seção de atividades extras */}
      <ExtraActivities />
      
      {/* Galeria de fotos da estrutura */}
      {/* <PhotoGallery /> */}
      
      {/* Depoimentos de pais */}
      {/* <Testimonials /> */}
      
      {/* Formulário de contato e localização */}
      <Contact />
      
      {/* Rodapé com informações adicionais */}
      <Footer />
      
      {/* Componentes flutuantes */}
      <BackToTop />
      <WhatsAppFloat />
    </main>
  );
}
