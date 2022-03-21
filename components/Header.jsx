import React from 'react';
import styled from 'styled-components';
import { theme } from '../config/style.config';

const Container = styled.div`
  padding: 20px 64px;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.white};
`;
const Logo = styled.h2`
  flex: 1;
  font-size: 24px;
`;
const Menu = styled.div`
  flex: 8;
  display: flex;
`;
const Item = styled.div`
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
const Login = styled.div`
  flex: 1;
  text-align: right;
`;

const Header = () => {
  return (
    <Container>
      <Logo>ZPlay</Logo>
      <Menu>
        <Item>Home</Item>
        <Item>Browse</Item>
        <Item>TV Channels</Item>
      </Menu>
      <Login>Login</Login>
    </Container>
  );
};

export default Header;
