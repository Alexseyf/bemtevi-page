"use client";

import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(rgba(74, 111, 181, 0.4), rgba(74, 111, 181, 0.4));
  background-size: cover;
  background-position: center;
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
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
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
  color: white;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav<{ $isOpen?: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-height: ${props => (props.$isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    opacity: ${props => (props.$isOpen ? '1' : '0')};
    visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
    margin-top: ${props => (props.$isOpen ? '1rem' : '0')};
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #e8c938;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }
`;

const CTAButton = styled.a`
  background-color: #e8c938;
  color: #333;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #bda42f;
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
          
        </LogoContainer>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
      </Logo>

      <Nav $isOpen={isMenuOpen}>
        <NavLink href="#sobre">Sobre Nós</NavLink>
        <NavLink href="#turmas">Nossas Turmas</NavLink>
        <NavLink href="#turno-inverso">Turno Inverso</NavLink>
        <NavLink href="#atividades">Atividades Extras</NavLink>
        <NavLink href="#contato">Contato</NavLink>
        <CTAButton
          href="https://wa.me/5553991280638?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20a%20escola."
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
