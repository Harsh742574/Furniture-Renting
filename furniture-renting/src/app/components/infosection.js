"use client";

import React from 'react';
import styled from 'styled-components';

const InfoSection = () => {
  return (
    <SectionContainer>
      <Card>
        <Icon>🏠</Icon>
        <Description>Home services at your doorstep</Description>
      </Card>
      <Card>
        <Icon>💼</Icon>
        <Description>Legal Documentation</Description>
      </Card>
      <Card>
        <Icon>🎉</Icon>
        <Description>Exciting offers and deals</Description>
      </Card>
    </SectionContainer>
  );
};

export default InfoSection;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f4f7f6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e4f0f5;
  }

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s, border 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
    color: #ff6f61;
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%);
    transition: all 0.3s;
    transform: skewX(-30deg);
    opacity: 0;
  }

  &:hover::after {
    left: 100%;
    transition: all 0.3s;
    opacity: 1;
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.div`
  font-size: 60px;
  margin-bottom: 20px;
  color: #ff6f61;
  transition: color 0.3s ease, transform 0.3s ease;

  ${Card}:hover & {
    color: #ff8566;
    transform: scale(1.2);
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #333;
  }
`;
