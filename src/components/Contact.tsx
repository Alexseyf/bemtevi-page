"use client";

import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f0f7ff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4a6fb5;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: #4a6fb5;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4a6fb5;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4a6fb5;
  }
`;

const SubmitButton = styled.button`
  background-color: #4a6fb5;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #5077bf;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #4a6fb5;
  margin-bottom: 1.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  color: #5077bf;
  font-size: 1.2rem;
  margin-top: 0.2rem;
`;

const InfoText = styled.div`
  p {
    margin: 0;
    color: #555;
    line-height: 1.5;
  }
`;

const MapContainer = styled.div`
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contato">
      <SectionTitle>Contato e Localização</SectionTitle>
      <ContactWrapper>
        <ContactForm>
          <FormTitle>Envie uma Mensagem</FormTitle>
          <FormGroup>
            <Label htmlFor="name">Nome Completo</Label>
            <Input type="text" id="name" placeholder="Seu nome" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" placeholder="Seu e-mail" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Telefone</Label>
            <Input type="tel" id="phone" placeholder="Seu telefone" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem</Label>
            <TextArea id="message" placeholder="Escreva sua mensagem aqui..." />
          </FormGroup>
          <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
        </ContactForm>
        
        <ContactInfo>
          <InfoCard>
            <InfoTitle>Informações de Contato</InfoTitle>
            <InfoList>
              <InfoItem>
                <IconWrapper>
                  <FaMapMarkerAlt />
                </IconWrapper>
                <InfoText>
                  <p>Rua Quinze de Novembro, 869 - Centro</p>
                  <p>Pelotas - RS, 96015-000</p>
                </InfoText>
              </InfoItem>
              <InfoItem>
                <IconWrapper>
                  <FaPhone />
                </IconWrapper>
                <InfoText>
                  <p>WhatsApp: (53) 99128-0638</p>
                </InfoText>
              </InfoItem>
              <InfoItem>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <InfoText>
                  <p>escolabemteviinfantil@gmail.com</p>
                </InfoText>
              </InfoItem>
              <InfoItem>
                <IconWrapper>
                  <FaClock />
                </IconWrapper>
                <InfoText>
                  <p>Segunda a Sexta: 7h às 19h</p>
                  <p>Sábados: Fechado</p>
                  <p>Domingos: Fechado</p>
                </InfoText>
              </InfoItem>
            </InfoList>
          </InfoCard>
          
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.2836050313804!2d-52.34144812337247!3d-31.76274991308253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b5a26717e8a1%3A0xe0ce7576b927df9e!2sR.%20Quinze%20de%20Novembro%2C%20869%20-%20Centro%2C%20Pelotas%20-%20RS%2C%2096015-000!5e0!3m2!1spt-BR!2sbr!4v1748718285281!5m2!1spt-BR!2sbr" 
              title="Localização da Escola Infantil"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </ContactInfo>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
