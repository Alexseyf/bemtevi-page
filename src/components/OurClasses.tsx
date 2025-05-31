"use client";

import React from 'react';
import styled from 'styled-components';

const ClassesContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #ffffff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4a6fb5;
  text-align: center;
  margin-bottom: 3rem;
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ClassCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ClassImage = styled.div`
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  ${ClassCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ClassContent = styled.div`
  padding: 1.5rem;
`;

const ClassTitle = styled.h3`
  font-size: 1.5rem;
  color: #4a6fb5;
  margin-bottom: 0.5rem;
`;

const ClassAge = styled.p`
  font-size: 0.9rem;
  color: #5077bf;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ClassDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const OurClasses = () => {
  const classes = [
    {
      id: 'bercario2',
      name: 'Berçário 2',
      age: '1 a 2 anos',
      description: 'Ambiente acolhedor com foco no desenvolvimento sensorial e motor, estimulando a descoberta do mundo através dos sentidos.',
      image: '/images/bercario.jpg'
    },
    {
      id: 'maternal1',
      name: 'Maternal 1',
      age: '2 a 3 anos',
      description: 'Atividades que estimulam a linguagem, coordenação motora e primeiras interações sociais em grupo.',
      image: '/images/maternal1.jpg'
    },
    {
      id: 'maternal2',
      name: 'Maternal 2',
      age: '3 a 4 anos',
      description: 'Desenvolvimento da autonomia, expressão criativa e habilidades sociais através de brincadeiras dirigidas e livres.',
      image: '/images/maternal2.jpg'
    },
    {
      id: 'pre1',
      name: 'Pré 1',
      age: '4 a 5 anos',
      description: 'Introdução às primeiras letras e números, com atividades lúdicas que preparam para a alfabetização.',
      image: '/images/pre1.jpg'
    },
    {
      id: 'pre2',
      name: 'Pré 2',
      age: '5 a 6 anos',
      description: 'Preparação para o ensino fundamental com atividades estruturadas de alfabetização e raciocínio lógico-matemático.',
      image: '/images/pre2.jpg'
    }
  ];

  return (
    <ClassesContainer id="turmas">
      <SectionTitle>Nossas Turmas</SectionTitle>
      <ClassesGrid>
        {classes.map((classItem) => (
          <ClassCard key={classItem.id}>
            <ClassImage>
              <img src={classItem.image} alt={`Turma ${classItem.name}`} />
            </ClassImage>
            <ClassContent>
              <ClassTitle>{classItem.name}</ClassTitle>
              <ClassAge>Faixa etária: {classItem.age}</ClassAge>
              <ClassDescription>{classItem.description}</ClassDescription>
            </ClassContent>
          </ClassCard>
        ))}
      </ClassesGrid>
    </ClassesContainer>
  );
};

export default OurClasses;
