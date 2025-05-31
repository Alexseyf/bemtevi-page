"use client";

import React from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

// Define the props interface for the styled component
interface BackToTopButtonProps {
  $visible: boolean;
}

const BackToTopButton = styled.button<BackToTopButtonProps>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4a6fb5;
  color: white;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: ${props => props.$visible ? '1' : '0'};
  transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.3s, transform 0.3s;
  z-index: 100;
  
  &:hover {
    background-color: #3a5fa5;
  }
  
  &:focus {
    outline: none;
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  // Show button when page is scrolled down
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <BackToTopButton 
      $visible={isVisible} 
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <FaArrowUp />
    </BackToTopButton>
  );
};

export default BackToTop;
