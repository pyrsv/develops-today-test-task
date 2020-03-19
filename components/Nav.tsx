import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav: React.FC = () => {
  return (
    <nav>
      <HeaderMenu>
        <HeaderMenuItem>
          <Link href="/">
            <MenuLink>Список постов</MenuLink>
          </Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <Link href="/">
            <MenuLink>Создать пост</MenuLink>
          </Link>
        </HeaderMenuItem>
      </HeaderMenu>
    </nav>
  );
};

const HeaderMenu = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const HeaderMenuItem = styled.li`
  margin: 0;
  :not(:last-child) {
    margin-right: 35px;
  }
`;

const MenuLink = styled.a`
  color: #777777;
  font-size: 22px;
  cursor: pointer;
  letter-spacing: -0.1px;
  padding: 10px 0;
  :hover {
    color: #000000;
  }
`;

export default Nav;
