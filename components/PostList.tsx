import React from 'react';
import styled from 'styled-components';
import PostThumb from './PostThumb';

const PostsList: React.FC = () => {
  return (
    <PostsContainer>
      <PostThumb />
      <PostThumb />
      <PostThumb />
      <PostThumb />
      <PostThumb />
      <PostThumb />
      <PostThumb />
      <PostThumb />
      <PostThumb />
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 30px 0;
`;

export default PostsList;
