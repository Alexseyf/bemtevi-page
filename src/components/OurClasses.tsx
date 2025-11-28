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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
  display: flex;
  flex-direction: column;
  height: 100%;
  
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
  display: flex;
  flex-direction: column;
  height: 100%;
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
  margin-bottom: 1.2rem;
  flex-grow: 1;
`;

const CheckButton = styled.a`
  display: block;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const OurClasses = () => {
  const buttonColors = {
    bercario2: '#FF9B54',
    maternal1: '#5D92FF',
    maternal2: '#FF5E7D',
    pre1: '#54D178',
    pre2: '#8A4FFF',
    turno_inverso: '#FFB63D'
  };

  const whatsappNumber = "5553991280638";
  
  const createWhatsappLink = (className: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de verificar a disponibilidade de vagas para a turma ${className}. Pode me ajudar?`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };
  
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
    },
    {
      id: 'turno_inverso',
      name: 'Turno Inverso',
      age: '6 a 9 anos',
      description: 'Apoio no desenvolvimento dos alunos do ensino fundamental com oficinas, atividades estruturadas de alfabetização e raciocínio lógico-matemático.',
      image: '/images/turno_inverso.jpg'
    }
  ];

  return (
    <ClassesContainer id="turmas">
      <SectionTitle>Nossas Turmas</SectionTitle>
      <ClassesGrid>
        {classes.map((classItem) => (
          <ClassCard key={classItem.id}>
            {/* <ClassImage>
              <img src={classItem.image} alt={`Turma ${classItem.name}`} />
            </ClassImage> */}
            <ClassContent>
              <ClassTitle>{classItem.name}</ClassTitle>
              <ClassAge>Faixa etária: {classItem.age}</ClassAge>
              <ClassDescription>{classItem.description}</ClassDescription>
              <CheckButton 
                href={createWhatsappLink(classItem.name)} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ backgroundColor: buttonColors[classItem.id as keyof typeof buttonColors] }}
              >
                Consultar Vagas
              </CheckButton>
            </ClassContent>
          </ClassCard>
        ))}
      </ClassesGrid>
    </ClassesContainer>
  );
};

export default OurClasses;
