import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  position: relative;
  height: 80vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(74, 111, 181, 0.4), rgba(107, 157, 250, 0.4)), url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    max-width: 600px;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const CTAButton = styled.a`
  background-color: #FFD700;
  color: #333;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #FFC800; /* Amarelo mais escuro no hover */
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Onde o Aprender se Torna uma Aventura Feliz!</h1>
        <p>
          Um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho,
          com atividades lúdicas e educativas que estimulam a criatividade e o aprendizado.
        </p>
        <CTAButton href="#turmas">Conheça Nossas Turmas</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
