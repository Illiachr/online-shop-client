import React, { useContext } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Row, Card, Form, Button, Container } from 'react-bootstrap';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../const';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const Auth = () => {
  const location = useLocation();
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE;
  const { user } = useContext(Context);
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
            onClick={() => {
              user.setIsAuth(true);
              history.push(`${SHOP_ROUTE}`);
            }}
            variant={"outline-success"}
          >
          {isLogin ? 'Log In' : 'Register'}
        </Button>
        </Row>
      </Form>
    </Card>
    </Container>
  );
};

export default observer(Auth);