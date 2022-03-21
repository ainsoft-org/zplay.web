import React from 'react';

import styled from 'styled-components';
const Button = styled.button`
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg + '00'};
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => props.bg + '40'};
  }
  &:active {
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => props.bg + '80'};
  }
`;

const RoundButton = ({ children, bg }) => {
  return <Button bg={bg}>{children}</Button>;
};

export default RoundButton;
