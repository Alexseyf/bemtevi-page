"use client";

import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosHeart } from "react-icons/io";


const FooterContainer = styled.footer`
  background-color: #4a6fb5;
  color: white;
  padding: 3rem 2rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 50px;
      height: 2px;
      background-color: #FFD700;
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.8rem;
  }
  
  a {
    color: #e0e0e0;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: #FFD700;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    transition: all 0.3s;
    
    &:hover {
      background-color: #5077bf;
      transform: translateY(-3px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #e0e0e0;
  
  p {
    margin: 0;
  }
  
  a {
    color: #FFD700;
    text-decoration: none;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>EEI Bem-te-vi</h3>
          <p>Um ambiente acolhedor e seguro para o desenvolvimento integral do seu filho.</p>
          <SocialLinks>
            <a href="https://www.facebook.com/escolainfantilbemtevi/?locale=pt_BR" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/bemteviescolainfantil/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Links Rápidos</h3>
          <FooterLinks>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#turmas">Nossas Turmas</a></li>
            <li><a href="#turno-inverso">Turno Inverso</a></li>
            <li><a href="#atividades">Atividades Extras</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#contato">Contato</a></li>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Horário de Funcionamento</h3>
          <FooterLinks>
            <li>Segunda a Sexta: 7h às 19h</li>
            <li>Sábados: Fechado</li>
            <li>Domingos: Fechado</li>
            <li>Feriados: Consultar calendário</li>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Contato</h3>
          <FooterLinks>
            <li>Rua Quinze de Novembro, 869</li>
            <li>Pelotas- RS, 96015-000</li>
            <li>WhatsApp: (53) 99128-0129</li>
            <li>escolabemteviinfantil@gmail.com</li>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <p>
          © {currentYear} Escola de Educação Infantil Bem-te-vi. 
          <br />
          Todos os direitos reservados.
          <br />
          Feito com <span style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}>
            <IoIosHeart size={16} style={{ color: '#ff6b6b', margin: '0 0.2rem' }} />
          </span> 
          para o futuro das nossas crianças.
        </p>
        <p>
          <a href="#" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> | <a href="#" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
