import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';
import Button from './elements/Button';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
const ErrorCode = styled.div`
  padding: 20px;
  font-size: 100px;
`;

const ErrorComponent = ({ title, status }) => {
  return (
    <Container>
      <h2>
        <ErrorCode>{status}</ErrorCode>
      </h2>
      <p>{title}</p>
      <br />
      <Link href={'/'}>
        <a>
          <Button>Get Back</Button>
        </a>
      </Link>
    </Container>
  );
};

export default ErrorComponent;
