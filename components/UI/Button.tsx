import React from 'react';
import styled from 'styled-components';

const Button: React.FC = () => {
  return <StyledButton>Готово</StyledButton>;
};

const StyledButton = styled.button`
  position: relative;
  bottom: 0;
  padding: 7px 10px;
  min-width: 140px;
  font-size: monospace;
  font-size: 18px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background-color: blue;
  transition: all 0.2s ease;
  :hover {
    bottom: 3px;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
