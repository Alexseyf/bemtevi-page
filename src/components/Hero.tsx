import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

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
    min-height: 0;
    padding: 0.75rem 0 1.5rem;
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
    gap: 0.75rem;
    padding-inline: 1rem;
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
    img {
      width: clamp(8rem, 27svh, 15rem);
      height: auto;
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

    span {
      white-space: nowrap;
    }
    
    @media (max-width: 1024px) {
      font-size: 2.4rem;
    }
    @media (max-width: 768px) {
      font-size: clamp(1.65rem, 6.5vw, 2.2rem);
      line-height: 1.15;
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
      line-height: 1.25;
      margin-bottom: 0.5rem;
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
      line-height: 1.35;
      margin-bottom: 0.85rem;
    }
  }
  
  @media (max-width: 768px) {
    max-width: 30rem;
    padding: 0;
    text-align: center;
  }
`;

const CTAButton = styled.a`
  background-color: #087347;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  text-align: center;
  
  &:hover {
    background-color: #065c39;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    min-height: 44px;
    padding: 0.65rem 0.75rem;
  }

  svg {
    flex: none;
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
          <h1>Escola de Educação Infantil <span>Bem-te-vi</span></h1>
          <h2>Onde o Aprender se Torna uma Aventura Feliz!</h2>
          <p>
            No Centro de Pelotas, um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho,
            com atividades lúdicas e educativas que estimulam a criatividade e o aprendizado.
          </p>
          <CTAButton href="https://wa.me/5553991280638?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20Escola%20Bem-te-vi." target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={22} aria-hidden="true" />
            Fale conosco pelo WhatsApp
          </CTAButton>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
