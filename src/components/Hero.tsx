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
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
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

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
  </svg>
);

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
          <CTAButton href="https://www.instagram.com/bemteviescolainfantil/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            Nos Acompanhe no Instagram
          </CTAButton>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
