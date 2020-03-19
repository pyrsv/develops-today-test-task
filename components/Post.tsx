import React from 'react';
import styled from 'styled-components';

const Post: React.FC = () => {
  return (
    <PostContainer>
      <PostTitle>Заголовок поста</PostTitle>
      <PostBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem beatae, delectus dicta dolorum
        earum eligendi enim eos eveniet facere in, laborum libero, nihil perspiciatis quod similique temporibus totam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem beatae, delectus dicta dolorum
        earum eligendi enim eos eveniet facere in, laborum libero, nihil perspiciatis quod similique temporibus totam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem beatae, delectus dicta dolorum
        earum eligendi enim eos eveniet facere in, laborum libero, nihil perspiciatis quod similique temporibus totam?
      </PostBody>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-family: sans-serif;
  box-shadow: -1px 4px 10px 0px rgba(0, 0, 0, 0.2);
`;

const PostTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PostBody = styled.p`
  font-size: 16px;
  letter-spacing: 1px;
  text-align: justify;
`;

export default Post;
