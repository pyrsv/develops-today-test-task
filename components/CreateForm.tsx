import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TextInput from './UI/TextInput';
import Textarea from './UI/Textarea';
import Button from './UI/Button';
import { createPost } from '../store/posts/actions';

interface FormData {
  title: string;
  body: string;
}

interface FormProps {
  createPost: Function;
}

const CreateForm: React.FC<FormProps> = ({ createPost }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    body: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      title: '',
      body: '',
    });
    createPost(formData);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <TextInput onChange={handleChange} value={formData.title} />
        <Textarea onChange={handleChange} value={formData.body} />
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

const mapDispatchToProps = dispatch => {
  return {
    createPost: formData => dispatch(createPost(formData)),
  };
};

export default connect(null, mapDispatchToProps)(CreateForm);
