import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../config/style.config';
import { Search, User } from 'react-feather';
import { RoundButton } from './elements';

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
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
const RightSide = styled.div`
  display: flex;
  flex: 1;
  text-align: right;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link href={'/'}>
          <a>ZPlay</a>
        </Link>
      </Logo>
      <Menu>
        <Item>
          <Link href="#">
            <a>Home</a>
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <a>Movies</a>
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <a>TV Series</a>
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <a>Cartoons</a>
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <a>FAQ</a>
          </Link>
        </Item>
      </Menu>
      <RightSide>
        <RoundButton bg={theme.colors.black}>
          <Search color={theme.colors.white} size={20} />
        </RoundButton>
        <RoundButton bg={theme.colors.black}>
          <User color={theme.colors.white} size={20} />
        </RoundButton>
      </RightSide>
    </Container>
  );
};

export default Header;
