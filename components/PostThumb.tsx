import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const PostThumb: React.FC = () => {
  return (
    <Link href="/">
      <PostThumbLink>
        <StyledPostThumb>
          <PostThumbTitle>Заголовок поста</PostThumbTitle>
          <PostThumbBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facilis, fugiat itaque iure nesciunt
            quidem quis quos repellat repudiandae similique soluta tenetur velit voluptas voluptatem voluptates. Ex iure
            nostrum repudiandae.
          </PostThumbBody>
        </StyledPostThumb>
      </PostThumbLink>
    </Link>
  );
};

const StyledPostThumb = styled.article`
  min-height: 160px;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  color: #777777;
  font-family: sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    box-shadow: -1px 4px 10px 0px rgba(0, 0, 0, 0.2);
    color: #000000;
  }
`;

const PostThumbLink = styled.a`
  color: inherit;
`;

const PostThumbTitle = styled.h3`
  margin-bottom: 10px;
  color: #000000;
  font-size: 22px;
`;

const PostThumbBody = styled.p`
  text-align: justify;
`;

export default PostThumb;
