import React from 'react';
import styled from 'styled-components';
import TextInput from './UI/TextInput';
import Textarea from './UI/Textarea';
import Button from './UI/Button';

const CreatePost: React.FC = () => {
  return (
    <FormContainer>
      <StyledForm>
        <TextInput />
        <Textarea />
        <Button />
      </StyledForm>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 55%;
  padding: 30px;
  margin: 60px auto 0;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background-color: #f7f8ff;
`;

const StyledForm = styled.form`
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  box-shadow: -1px 4px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export default CreatePost;
