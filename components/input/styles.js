import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0% { opacity: 1; text-shadow: 0 0 5px #00ff41; }
  50% { opacity: 0.85; text-shadow: 0 0 20px #00ff41; }
  100% { opacity: 1; text-shadow: 0 0 5px #00ff41; }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, #000000 0%, #001a00 100%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 2px solid #00ff41;
  box-shadow: 0 0 20px #00ff41;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    font-size: 32px;
    font-family: 'Courier New', monospace;
    padding: 0 20px;
    color: #00ff41;
    outline: none;
    caret-color: #00ff41;

    animation: ${flicker} 1.5s infinite;
  }
`;
