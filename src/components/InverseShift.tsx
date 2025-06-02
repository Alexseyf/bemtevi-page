"use client";

import React from 'react';
import styled from 'styled-components';
import { FaBook, FaUtensils } from 'react-icons/fa';
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";


const InverseShiftContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f0f7ff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4a6fb5;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ActivitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ActivityItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ActivityHeader = styled.div`
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const IconWrapper = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ActivityTitle = styled.h4`
  font-size: 1.2rem;
  color: white;
  margin: 0;
`;

const ActivityContent = styled.div`
  padding: 1.2rem;
  flex-grow: 1;
  
  p {
    font-size: 1rem;
    color: #333;
    margin: 0;
    line-height: 1.5;
  }
`;

const InverseShift = () => {
  const cardColors = {
    reforcoEscolar: {
      bg: '#FF9B54', 
      icon: '#FF9B54'
    },
    oficinas: {
      bg: '#8A4FFF',
      icon: '#8A4FFF'
    },
    atividades: {
      bg: '#4ECDC4',
      icon: '#4ECDC4'
    },
    alimentacao: {
      bg: '#FF6B6B',
      icon: '#FF6B6B'
    }
  };

  return (
    <InverseShiftContainer id="turno-inverso">
      <SectionTitle>Manhã Criativa: Nosso Turno Inverso</SectionTitle>
      <SectionSubtitle>
        Atendimento especial para crianças do ensino fundamental no período complementar à escola regular.
      </SectionSubtitle>
      
      <ContentWrapper>
        <TextContent>
          <p>
            Nossa proposta de Turno Inverso, a &ldquo;Manhã Criativa&rdquo;, foi desenvolvida especialmente 
            para atender crianças do ensino fundamental que estudam no período da tarde.
          </p>
          <p>
            Oferecemos um ambiente seguro e estimulante, com atividades estruturadas que complementam 
            o aprendizado escolar, auxiliam nas tarefas de casa e promovem o desenvolvimento de 
            habilidades sociais e criativas.
          </p>
          
          <ActivitiesList>
            <ActivityItem>
              <ActivityHeader style={{ backgroundColor: cardColors.reforcoEscolar.bg }}>
                <IconWrapper style={{ color: cardColors.reforcoEscolar.icon }}>
                  <FaBook />
                </IconWrapper>
                <ActivityTitle>Reforço Escolar</ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <p>Auxílio personalizado nas disciplinas em que a criança precisa de apoio adicional.</p>
              </ActivityContent>
            </ActivityItem>
            
            <ActivityItem>
              <ActivityHeader style={{ backgroundColor: cardColors.oficinas.bg }}>
                <IconWrapper style={{ color: cardColors.oficinas.icon }}>
                  <FaPaintBrush />
                </IconWrapper>
                <ActivityTitle>Oficinas Criativas</ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <p>Atividades artísticas e culturais que estimulam a expressão e criatividade.</p>
              </ActivityContent>
            </ActivityItem>
            
            <ActivityItem>
              <ActivityHeader style={{ backgroundColor: cardColors.atividades.bg }}>
                <IconWrapper style={{ color: cardColors.atividades.icon }}>
                  <MdOutlineSportsHandball />
                </IconWrapper>
                <ActivityTitle>Atividades Físicas</ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <p>Jogos e brincadeiras que promovem o desenvolvimento motor e trabalho em equipe.</p>
              </ActivityContent>
            </ActivityItem>
            
            <ActivityItem>
              <ActivityHeader style={{ backgroundColor: cardColors.alimentacao.bg }}>
                <IconWrapper style={{ color: cardColors.alimentacao.icon }}>
                  <FaUtensils />
                </IconWrapper>
                <ActivityTitle>Alimentação</ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <p>Refeições balanceadas e orientação nutricional para hábitos alimentares saudáveis.</p>
              </ActivityContent>
            </ActivityItem>
          </ActivitiesList>
        </TextContent>
        
        {/* <ImageContent>
          <img src="/images/turno_inverso.png" alt="Crianças participando de atividades do turno inverso" />
        </ImageContent> */}
      </ContentWrapper>
    </InverseShiftContainer>
  );
};

export default InverseShift;
