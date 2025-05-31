"use client";

import React from 'react';
import styled from 'styled-components';
import { FaBook, FaMusic, FaUtensils } from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';
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
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  background-color: #5077bf;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ActivityText = styled.div`
  h4 {
    font-size: 1.2rem;
    color: #4a6fb5;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0;
  }
`;

const InverseShift = () => {
  return (
    <InverseShiftContainer id="turno-inverso">
      <SectionTitle>Manhã Criativa: Nosso Turno Inverso</SectionTitle>
      <SectionSubtitle>
        Atendimento especial para crianças do ensino fundamental no período complementar à escola regular.
      </SectionSubtitle>
      
      <ContentWrapper>
        <TextContent>
          <p>
            Nossa proposta de Turno Inverso, a "Manhã Criativa", foi desenvolvida especialmente 
            para atender crianças do ensino fundamental que estudam no período da tarde em outras escolas.
          </p>
          <p>
            Oferecemos um ambiente seguro e estimulante, com atividades estruturadas que complementam 
            o aprendizado escolar, auxiliam nas tarefas de casa e promovem o desenvolvimento de 
            habilidades sociais e criativas.
          </p>
          
          <ActivitiesList>
            <ActivityItem>
              <IconWrapper>
                <FaBook />
              </IconWrapper>
              <ActivityText>
                <h4>Reforço Escolar</h4>
                <p>Auxílio personalizado nas disciplinas em que a criança precisa de apoio adicional.</p>
              </ActivityText>
            </ActivityItem>
            
            <ActivityItem>
              <IconWrapper>
                <FaPaintBrush />
              </IconWrapper>
              <ActivityText>
                <h4>Oficinas Criativas</h4>
                <p>Atividades artísticas e culturais que estimulam a expressão e criatividade.</p>
              </ActivityText>
            </ActivityItem>
            
            <ActivityItem>
              <IconWrapper>
                <MdOutlineSportsHandball />
              </IconWrapper>
              <ActivityText>
                <h4>Atividades Físicas</h4>
                <p>Jogos e brincadeiras que promovem o desenvolvimento motor e trabalho em equipe.</p>
              </ActivityText>
            </ActivityItem>
            
            <ActivityItem>
              <IconWrapper>
                <FaUtensils />
              </IconWrapper>
              <ActivityText>
                <h4>Alimentação Saudável</h4>
                <p>Refeições balanceadas e orientação nutricional para hábitos alimentares saudáveis.</p>
              </ActivityText>
            </ActivityItem>
          </ActivitiesList>
        </TextContent>
        
        <ImageContent>
          <img src="/images/turno-inverso.jpg" alt="Crianças participando de atividades do turno inverso" />
        </ImageContent>
      </ContentWrapper>
    </InverseShiftContainer>
  );
};

export default InverseShift;
