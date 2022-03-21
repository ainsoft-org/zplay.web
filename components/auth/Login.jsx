import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { theme } from '../../config/style.config';
import { Button } from '../elements';

const Container = styled.div`
  padding: 10vh 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/banner.jpg');
  height: 90vh;
`;

const Form = styled.form`
  min-width: 400px;
  padding: 24px 0;
  color: ${theme.colors.white};
`;

const Description = styled.p`
  color: ${theme.colors.white + '90'};
  padding-top: 12px;
`;

const Input = styled.input`
  padding: 16px 12px;
  display: block;
  width: 100%;
  outline: none;
  margin: 10px 0;
  border: none;
  border: 2px solid ${theme.colors.black};
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  &:hover,
  &:focus,
  &:active {
    transition: all 0.2s linear;
    border-bottom-color: ${theme.colors.primary};
  }
`;
const Label = styled.label``;
const Error = styled.div`
  padding: 12px;
  font-size: 12px;
  background: ${theme.colors.primary + '20'};
  color: ${theme.colors.primary};
  margin-bottom: 10px;
`;

const Login = () => {
  return (
    <Container>
      <div>
        <h1>Sign in</h1>
        <Description>
          Sign in to our application to watch movies and
          <br /> TV series online
        </Description>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email is Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <Label>Email:</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <Error> {errors.email} </Error>
                )}
              </div>
              <div>
                <Label>Password:</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                />

                {errors.password && touched.password && (
                  <Error> {errors.password} </Error>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Login;
