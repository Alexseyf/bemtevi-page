"use client";

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaRobot, FaPaperPlane, FaTimes, FaMinus } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const ChatContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 90px; /* Positioned above the BackToTop button (30px bottom + 50px height + 10px gap) */
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${props => props.$isOpen && `
    @media (max-width: 600px) {
      bottom: 0;
      right: 0;
      left: 0;
      align-items: stretch;
    }
  `}
`;

const ChatButton = styled.button<{ $isOpen: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4a6fb5;
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
  
  &:hover {
    background-color: #3a5fa5;
    transform: scale(1.05);
  }

  /* Hide button when chat is open, or transform it */
  ${props => props.$isOpen && `
    display: none;
  `}
`;

const ChatWindow = styled.div<{ $isOpen: boolean }>`
  width: 350px;
  height: 500px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: opacity 0.3s, transform 0.3s, height 0.3s;
  transform-origin: bottom right;
  
  @media (max-width: 600px) {
    width: 100vw;
    left: 0;
    height: 45vh;
    bottom: 0;
    border-radius: 12px;
  }
  ${props => !props.$isOpen && `
    opacity: 0;
    transform: scale(0);
    pointer-events: none;
    position: absolute;
    bottom: 0;
    right: 0;
  `}
`;

const ChatHeader = styled.div`
  background-color: #4a6fb5;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeaderControls = styled.div`
  display: flex;
  gap: 10px;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f9f9f9;
`;

const MessageBubble = styled.div<{ $isUser: boolean }>`
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 0.9rem;
  line-height: 1.4;
  align-self: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.$isUser ? '#4a6fb5' : '#e0e0e0'};
  color: ${props => props.$isUser ? 'white' : '#333'};
  border-bottom-right-radius: ${props => props.$isUser ? '4px' : '18px'};
  border-bottom-left-radius: ${props => props.$isUser ? '18px' : '4px'};
`;

const InputArea = styled.form`
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
  background-color: white;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ccc; /* Darker border */
  border-radius: 20px;
  outline: none;
  font-size: 0.9rem;
  background-color: #f0f2f5; /* Light gray background */
  color: #333; /* Dark text */
  
  &:focus {
    border-color: #4a6fb5;
    background-color: white; /* White on focus */
  }
  
  &::placeholder {
    color: #888; /* Darker placeholder */
  }
`;

const SendButton = styled.button`
  background-color: #4a6fb5;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #3a5fa5;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const TypingIndicator = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-left: 10px;
  font-style: italic;
`;

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const WHATSAPP_FALLBACK_KEYWORD = "WhatsApp";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', parts: [{ text: 'Olá! Como posso ajudar você hoje?' }] }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isLoading && isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isLoading, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    const newMessages = [
      ...messages,
      { role: 'user' as const, parts: [{ text: userMessage }] }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    try {
      const history = messages
        .filter((_, index) => index !== 0 || messages[0].role !== 'model')
        .map(msg => ({
          role: msg.role,
          parts: msg.parts
        }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          history: history,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      setMessages(prev => [
        ...prev,
        { role: 'model', parts: [{ text: data.text }] }
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        { role: 'model', parts: [{ text: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde.' }] }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContainer $isOpen={isOpen}>
      {isOpen && (
        <ChatWindow $isOpen={isOpen}>
          <ChatHeader>
            <HeaderTitle>
              <FaRobot /> Assistente Virtual
            </HeaderTitle>
            <HeaderControls>
              <ControlButton onClick={toggleChat} aria-label="Minimizar">
                <FaMinus />
              </ControlButton>
            </HeaderControls>
          </ChatHeader>
          <MessagesContainer>
            {messages.map((msg, index) => {
              const isWhatsappFallback = msg.parts[0].text.includes(WHATSAPP_FALLBACK_KEYWORD);
              return (
                <MessageBubble key={index} $isUser={msg.role === 'user'}>
                  {msg.parts[0].text}
                  {isWhatsappFallback && (
                    <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
                      <a
                        href="https://wa.me/5535991280638"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 48,
                          height: 48,
                          background: '#25D366',
                          borderRadius: '50%',
                          textDecoration: 'none',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}
                      >
                        <FaWhatsapp size={28} color="white" />
                      </a>
                    </div>
                  )}
                </MessageBubble>
              );
            })}
            {isLoading && (
              <TypingIndicator>Digitando...</TypingIndicator>
            )}
            <div ref={messagesEndRef} />
          </MessagesContainer>
          <InputArea onSubmit={handleSendMessage}>
            <InputField 
              ref={inputRef}
              type="text" 
              placeholder="Digite sua mensagem..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
            />
            <SendButton type="submit" disabled={isLoading || !inputValue.trim()}>
              <FaPaperPlane />
            </SendButton>
          </InputArea>
        </ChatWindow>
      )}
      <ChatButton onClick={toggleChat} $isOpen={isOpen} aria-label="Abrir chat">
        <FaRobot />
      </ChatButton>
    </ChatContainer>
  );
};

export default Chatbot;
