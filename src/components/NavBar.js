import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { SHOP_ROUTE } from '../const';
import { observer } from 'mobx-react-lite';

const NavBar = () => {
  const { user } = useContext(Context);
  return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <NavLink className="ml-3" style={{color: '#ffffff', fontSize: '24px', textDecoration: 'none'}} to={SHOP_ROUTE}>BuyYourDevice</NavLink>
      { user.isAuth ?
        <Nav className="ml-auto" style={{color: '#ffffff'}}>
          <Button className="mr-2" variant={'outline-light'}>Admin panel</Button>
          <Button
            variant={'outline-light'}
            onClick={() => user.setIsAuth(false)}
          >
            Log Out
          </Button>
        </Nav>
        :
        <Nav className="ml-auto" style={{color: '#ffffff'}}>
          <Button 
            className="mr-2"
            variant={'outline-light'}
            onClick={() => user.setIsAuth(true)}
          >
            Log In
        </Button>
        </Nav>
      }
    </Container>
  </Navbar>
  );
};

export default observer(NavBar);