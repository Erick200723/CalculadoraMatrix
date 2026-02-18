// src/styles.js
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.9; }
  100% { opacity: 1; }
`;


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at center, #000 40%, #001a00 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${flicker} 3s infinite;
`;

export const Contant = styled.div`
  width: 380px;
  min-height: 500px;
  border-radius: 15px;
  background-color: #000;
  border: 2px solid #00ff41;

  box-shadow: 0 0 30px #00ff41,
              inset 0 0 20px #00ff41;

  padding: 20px;
`;

export const Rom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 10px;
`;


export const Colum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
