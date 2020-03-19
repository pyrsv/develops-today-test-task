import React from 'react';
import styled from 'styled-components';

const TextInput: React.FC = () => {
  return (
    <TextInputContainer>
      <TextInputLabel for="input">Заголовок поста</TextInputLabel>
      <StyledInput id="input" />
    </TextInputContainer>
  );
};

const TextInputContainer = styled.div`
  margin-bottom: 15px;
`;

const TextInputLabel = styled.label`
  display: inline-block;
  margin-bottom: 7px;
  font-family: monospace;
  font-size: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #777777;
  border-radius: 8px;
  transition: all 0.3s ease;
  outline: none;
  :hover {
    border-color: #000000;
  }
  :active,
  :focus {
    background-color: #f7f8ff;
    box-shadow: 0px 3px 9px -3px rgba(0, 0, 0, 0.2);
  }
`;

export default TextInput;
