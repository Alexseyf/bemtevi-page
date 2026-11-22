import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const HeroContainer = styled.section`
  position: relative;
  min-height: max(75vh, 450px);
  padding: 6rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(74, 111, 181, 0.4), rgba(107, 157, 250, 0.4));
  background-size: cover;
  background-position: center;
  color: white;
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 85vh;
    padding: 2rem 0;
    flex-direction: column;
    justify-content: center;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const HeroImage = styled.div`
  flex: 0 0 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-height: 400px;
    max-width: 100%;
    object-fit: contain;
  }

  @media (min-width: 1200px) {
    min-width: 0;
    justify-content: flex-end;

    img {
      width: min(700px, calc(50vw - 80px));
      height: auto;
      max-width: none;
      max-height: none;
    }
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    margin-bottom: 2rem;
    
    img {
      max-width: 80%;
      max-height: 300px;
    }
  }
`;

const HeroContent = styled.div`
  flex: 0 0 50%;
  padding: 0 1rem;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    
    @media (max-width: 1024px) {
      font-size: 2.4rem;
    }
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
  
  h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    
    @media (max-width: 1024px) {
      font-size: 1.4rem;
    }
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    
    @media (max-width: 1024px) {
      font-size: 1.1rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    text-align: center;
  }
`;

const CTAButton = styled.a`
  background: #25d366;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  
  &:hover {
    background: #1fbd5b;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.65rem 1.2rem;
  }

  svg {
    @media (max-width: 768px) {
      width: 18px !important;
      height: 18px !important;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroImage>
          <img src="/images/banner-img.webp" alt="Criança com traje de formatura e logomarca da Escola Bem-te-vi" width={2000} height={1733} loading="eager" fetchPriority="high" />
        </HeroImage>
        <HeroContent>
          <h1>Escola de Educação Infantil Bem-te-vi</h1>
          <h2>Onde o Aprender se Torna uma Aventura Feliz!</h2>
          <p>
            No Centro de Pelotas, um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho,
            com atividades lúdicas e educativas que estimulam a criatividade e o aprendizado.
          </p>
          <CTAButton href="https://wa.me/5553991280638?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20a%20escola." target="_blank" rel="noopener noreferrer">
            <FaWhatsapp aria-hidden="true" />
            Fale conosco pelo WhatsApp
          </CTAButton>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
