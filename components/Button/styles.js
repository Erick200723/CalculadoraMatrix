import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #00ff41;
  background-color: #000;
  color: #00ff41;
  font-size: 22px;
  font-family: 'Courier New', monospace;
  flex: 1;
  transition: all 0.2s ease-in-out;

  box-shadow: 0 0 5px #00ff41,
              inset 0 0 5px #00ff41;

  &:hover {
    cursor: pointer;
    background-color: #001a00;
    box-shadow: 0 0 15px #00ff41,
                inset 0 0 10px #00ff41;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px #00ff41;
  }
`;
