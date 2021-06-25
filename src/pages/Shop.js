/* eslint-disable react-hooks/exhaustive-deps */
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import ItemList from '../components/ItemList';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchItems, fetchTypes } from '../http/itemAPI';
import Pages from '../components/Pages';

const Shop = () => {
  const { items } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => items.setTypes(data));
    fetchBrands().then(data => items.setBrands(data));
    fetchItems().then(data => {
      items.setItems(data.rows);
      items.setTotalCount(data.count);
    });
  }, []);

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <ItemList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
};

export default observer(Shop);