import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  position: relative;
  height: 75vh;
  min-height: 450px;
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
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
  
  h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    text-align: center;
  }
`;

const CTAButton = styled.a`
  background-color: #e8c938;
  color: #333;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #bda42f;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroImage>
          <img src="/images/banner-img.png" alt="Escola Bem-te-vi" />
        </HeroImage>
        <HeroContent>
          <h1>Escola de Educação Infantil Bem-te-vi</h1>
          <h2>Onde o Aprender se Torna uma Aventura Feliz!</h2>
          <p>
            Um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho,
            com atividades lúdicas e educativas que estimulam a criatividade e o aprendizado.
          </p>
          <CTAButton href="#turmas">Conheça Nossas Turmas</CTAButton>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
