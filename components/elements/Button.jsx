import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config/style.config';

const ButtonWarapper = styled.button`
  border: none;
  padding: 12px 24px;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
`;

const Button = ({ children }) => {
  return <ButtonWarapper>{children}</ButtonWarapper>;
};

export default Button;
