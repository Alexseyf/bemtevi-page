"use client";

import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const TestimonialsContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #ffffff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4a6fb5;
  text-align: center;
  margin-bottom: 3rem;
`;

const TestimonialsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const QuoteMark = styled.div`
  font-size: 5rem;
  color: #e6e6e6;
  position: absolute;
  top: 10px;
  left: 20px;
  font-family: Georgia, serif;
  z-index: 0;
`;

const TestimonialContent = styled.div`
  position: relative;
  z-index: 1;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const Stars = styled.div`
  color: #ffb400;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.2rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  h4 {
    font-size: 1.1rem;
    color: #4a6fb5;
    margin: 0 0 0.2rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #777;
    margin: 0;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 'testimonial1',
      text: 'Minha filha estuda na Escola Infantil há dois anos e o desenvolvimento dela tem sido incrível. A equipe é atenciosa e os projetos pedagógicos são muito bem elaborados. Ela adora ir para a escola todos os dias!',
      author: 'Ana C.',
      role: 'Mãe da Mariana, Maternal 2',
      image: '/images/testimonial-1.jpg',
      stars: 5
    },
    {
      id: 'testimonial2',
      text: 'O que mais me impressiona é o cuidado com a alimentação e o carinho com que tratam as crianças. Meu filho participa do turno inverso e sempre volta para casa feliz, contando as atividades que fez durante o dia.',
      author: 'Roberto M.',
      role: 'Pai do Pedro, Turno Inverso',
      image: '/images/testimonial-2.jpg',
      stars: 5
    },
    {
      id: 'testimonial3',
      text: 'As atividades extras, especialmente a música e a dança, fizeram uma diferença enorme na socialização da minha filha. Os professores são muito qualificados e a comunicação com os pais é excelente.',
      author: 'Carla S.',
      role: 'Mãe da Júlia, Pré 1',
      image: '/images/testimonial-3.jpg',
      stars: 5
    }
  ];

  return (
    <TestimonialsContainer id="depoimentos">
      <SectionTitle>O que os Pais Dizem</SectionTitle>
      <TestimonialsWrapper>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <QuoteMark>"</QuoteMark>
            <TestimonialContent>
              <Stars>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Stars>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src={testimonial.image} alt={testimonial.author} />
                </AuthorImage>
                <AuthorInfo>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialContent>
          </TestimonialCard>
        ))}
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;
