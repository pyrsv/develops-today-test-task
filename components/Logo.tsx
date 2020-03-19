import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <StyledLogo>
        <Brand>Blog</Brand>
      </StyledLogo>
    </Link>
  );
};

const StyledLogo = styled.a`
  text-decoration: none;
  color: blue;
  cursor: pointer;
`;

const Brand = styled.span`
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default Logo;
