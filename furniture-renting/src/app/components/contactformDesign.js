// contactformDesign.js

import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #343a40;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  h2::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #f7a399;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  h2:hover::before {
    transform: translateX(0);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: ${props => (props.color === 'black' ? 'black' : 'inherit')};
  transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: #ccc;
    background-color: #f7f7f7;
    transform: scale(1.02);
  }

  &:focus {
    border-color: #a3a3a3;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Textarea = styled.textarea`
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: ${props => (props.color === 'black' ? 'black' : 'inherit')};
  transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
  min-height: 100px;
  resize: vertical;

  &:hover {
    border-color: #ccc;
    background-color: #f7f7f7;
    transform: scale(1.02);
  }

  &:focus {
    border-color: #a3a3a3;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #f7a399;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #f78b7b;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
