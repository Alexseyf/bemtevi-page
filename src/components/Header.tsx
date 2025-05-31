"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    position: relative;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a6fb5;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4a6fb5;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav<{ isOpen?: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-height: ${props => (props.isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    opacity: ${props => (props.isOpen ? '1' : '0')};
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    margin-top: ${props => (props.isOpen ? '1rem' : '0')};
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #4a6fb5;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }
`;

const CTAButton = styled.a`
  background-color: #4a6fb5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5077bf;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoContainer>
          <Image 
            src="/images/logo-header.png" 
            alt="Logo da Escola" 
            width={50} 
            height={50}
            priority
          />
          <Image 
            src="/images/logo-nome.png" 
            alt="Logo da Escola" 
            width={150} 
            height={50}
            priority
          />
        </LogoContainer>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
      </Logo>

      <Nav isOpen={isMenuOpen}>
        <NavLink href="#sobre">Sobre Nós</NavLink>
        <NavLink href="#turmas">Nossas Turmas</NavLink>
        <NavLink href="#turno-inverso">Turno Inverso</NavLink>
        <NavLink href="#atividades">Atividades Extras</NavLink>
        <NavLink href="#contato">Contato</NavLink>
        <CTAButton
          href="https://wa.me/5553991280638?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Escola%20Infantil."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato via WhatsApp"
        >
          Agende uma Visita
        </CTAButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
