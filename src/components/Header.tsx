"use client";

import React from "react";
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
    margin-bottom: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
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
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Image src="/images/logo-header.png" alt="Logo da Escola" width={50} height={50} />
        <Image src="/images/logo-nome.png" alt="Logo da Escola" width={150} height={50} />

        {/* <span>Escola de EducaçãoInfantil</span> */}
      </Logo>

      <Nav>
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
