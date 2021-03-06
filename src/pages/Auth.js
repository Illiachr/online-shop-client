import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Row, Card, Form, Button, Container } from 'react-bootstrap';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../const';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log('location.pathname >>> ', location.pathname);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
    <Card style={{width: '600px'}} className="p-5">
      <h2 className="m-auto">{isLogin ? 'Log In' : 'Authorization'}</h2>
      <Form className="d-flex flex-column">
        <Form.Control
          className="mt-3"
          placeholder="Enter your email..."
        />

        <Form.Control
          className="mt-3"
          placeholder="Enter your password..."
        />
        <Row className="mt-3 d-flex justify-content-between pl-3 pr-3">
          {
            isLogin
            ? <div>No account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink></div>
            : <div>Already have an account? <NavLink to={LOGIN_ROUTE}>Log In</NavLink></div>
          }
          <Button
          variant={"outline-success"}>
          {isLogin ? 'Log In' : 'Register'}
        </Button>
        </Row>
      </Form>
    </Card>
    </Container>
  );
};

export default Auth;