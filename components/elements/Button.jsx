import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config/style.config';

const ButtonWarapper = styled.button`
  transition: all 0.2s linear;
  border: none;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  &:hover {
    transition: all 0.2s linear;
    background: #000;
  }
  &:active {
    transition: all 0.2s linear;
    background: ${theme.colors.secondary};
  }
`;

const Button = ({ children }) => {
  return <ButtonWarapper>{children}</ButtonWarapper>;
};

export default Button;
