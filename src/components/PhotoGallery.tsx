"use client";

import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4a6fb5;
  text-align: center;
  margin-bottom: 3rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryItem = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const PhotoGallery = () => {
  const galleryItems = [
    {
      id: 'classroom1',
      image: '/images/gallery-classroom1.jpg',
      caption: 'Sala de aula do Maternal - ambiente colorido e estimulante'
    },
    {
      id: 'playground',
      image: '/images/gallery-playground.jpg',
      caption: 'Área externa com brinquedos seguros e divertidos'
    },
    {
      id: 'artroom',
      image: '/images/gallery-artroom.jpg',
      caption: 'Espaço de artes para atividades criativas'
    },
    {
      id: 'lunchroom',
      image: '/images/gallery-lunchroom.jpg',
      caption: 'Refeitório aconchegante para refeições nutritivas'
    },
    {
      id: 'musicroom',
      image: '/images/gallery-musicroom.jpg',
      caption: 'Sala de música com instrumentos variados'
    },
    {
      id: 'readingcorner',
      image: '/images/gallery-readingcorner.jpg',
      caption: 'Cantinho da leitura com livros infantis'
    },
    {
      id: 'naproom',
      image: '/images/gallery-naproom.jpg',
      caption: 'Sala de descanso para o momento do soninho'
    },
    {
      id: 'outdooractivities',
      image: '/images/gallery-outdooractivities.jpg',
      caption: 'Atividades ao ar livre para desenvolvimento motor'
    }
  ];

  return (
    <GalleryContainer id="galeria">
      <SectionTitle>Nossa Estrutura</SectionTitle>
      <GalleryGrid>
        {galleryItems.map((item) => (
          <GalleryItem key={item.id}>
            <GalleryImage src={item.image} alt={item.caption} />
            <ImageOverlay className="overlay">
              <p>{item.caption}</p>
            </ImageOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default PhotoGallery;
