import React from 'react';
import styled from 'styled-components';
import LayoutContainer from './LayoutContainer';
import Logo from './Logo';
import Nav from './Nav';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <LayoutContainer>
        <HeaderContainer>
          <Logo />
          <Nav />
        </HeaderContainer>
      </LayoutContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 10px 0;
  border-bottom: 2px solid blue;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: monospace;
`;

export default Header;
