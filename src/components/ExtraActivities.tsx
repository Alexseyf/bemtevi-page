"use client";

import React from 'react';
import styled from 'styled-components';
import { FaMusic, FaChild, FaUtensils } from 'react-icons/fa';
import { MdSportsMartialArts } from "react-icons/md";

const ActivitiesContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #ffffff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4a6fb5;
  text-align: center;
  margin-bottom: 3rem;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ActivityCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ActivityHeader = styled.div`
  background-color: #4a6fb5;
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  background-color: white;
  color: #4a6fb5;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
`;

const ActivityTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const ActivityContent = styled.div`
  padding: 1.5rem;
  
  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }
`;

const ExtraActivities = () => {
  const activities = [
    {
      id: 'dance',
      title: 'Dança',
      description: 'Aulas de dança que promovem o desenvolvimento da coordenação motora, ritmo, expressão corporal e socialização. As crianças aprendem diferentes estilos de dança de forma lúdica e divertida.',
      icon: <FaChild />
    },
    {
      id: 'music',
      title: 'Música',
      description: 'Atividades musicais que estimulam a percepção auditiva, o senso rítmico e a expressão vocal. As crianças têm contato com diversos instrumentos e aprendem canções que enriquecem seu repertório cultural.',
      icon: <FaMusic />
    },
    {
      id: 'capoeira',
      title: 'Capoeira',
      description: 'Prática que combina elementos de dança, luta e música, promovendo o desenvolvimento motor, disciplina e o conhecimento da cultura brasileira. As aulas são adaptadas para cada faixa etária.',
      icon: <MdSportsMartialArts />
    },
    {
      id: 'cooking',
      title: 'Culinária com a Nutricionista',
      description: 'Oficinas práticas onde as crianças aprendem sobre alimentação saudável de forma divertida. Sob orientação da nossa nutricionista, elas participam do preparo de receitas simples e nutritivas.',
      icon: <FaUtensils />
    }
  ];

  return (
    <ActivitiesContainer id="atividades">
      <SectionTitle>Atividades Extras</SectionTitle>
      <ActivitiesGrid>
        {activities.map((activity) => (
          <ActivityCard key={activity.id}>
            <ActivityHeader>
              <IconWrapper>
                {activity.icon}
              </IconWrapper>
              <ActivityTitle>{activity.title}</ActivityTitle>
            </ActivityHeader>
            <ActivityContent>
              <p>{activity.description}</p>
            </ActivityContent>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
    </ActivitiesContainer>
  );
};

export default ExtraActivities;
