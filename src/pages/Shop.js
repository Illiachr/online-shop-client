import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import ItemList from '../components/ItemList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <ItemList/>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;