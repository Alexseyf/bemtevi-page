"use client";

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const AboutText = styled.div`
  flex: 1;
  
  h2 {
    font-size: 2.5rem;
    color: #4a6fb5;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer id="sobre">
      <AboutContent>
        <AboutImage>
          <img src="/images/about-school.jpg" alt="Ambiente acolhedor da nossa escola" />
        </AboutImage>
        <AboutText>
          <h2>Nossa Proposta</h2>
          <p>
            Na Escola Infantil, acreditamos que cada criança é única e merece um ambiente 
            que respeite seu ritmo de desenvolvimento e estimule sua curiosidade natural.
          </p>
          <p>
            Nossa filosofia educacional baseia-se no acolhimento, na segurança e no 
            desenvolvimento integral da criança, combinando atividades lúdicas com 
            aprendizado significativo.
          </p>
          <p>
            Parte essencial do nosso cuidado integral é o almoço fornecido na escola. Preparamos refeições balanceadas e saborosas, pensadas para nutrir o corpo e a mente, garantindo que nossos pequenos tenham toda a energia para aprender, brincar e se desenvolver plenamente.
          </p>
          <p>
            Contamos com uma equipe de educadores qualificados e apaixonados, 
            comprometidos em proporcionar experiências enriquecedoras que estimulam 
            o desenvolvimento cognitivo, social, emocional e físico de cada aluno.
          </p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutUs;
