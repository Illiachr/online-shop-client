import React from 'react';
import { Row, Col, Container, Image, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/star-big.svg'

const ItemPage = () => {
  const item = {
            "id": 1,
            "name": "ThinkPad",
            "price": 30000,
            "rating": 9,
            "img": "http://localhost:7000/e2fe3e71-d3ef-40dc-a11f-413fa2d90fe5.jpg",
            "createdAt": "2021-06-21T15:50:30.113Z",
            "updatedAt": "2021-06-21T15:50:30.113Z",
            "typeId": 1,
            "brandId": 1
  };
  const itemInfo = [
    {id: 1, title: 'RAM', description: '5GB'},
    {id: 2, title: 'Camera', description: '12MP'},
    {id: 3, title: 'CPU', description: 'Core i7'},
    {id: 4, title: 'Cores', description: '2'},
    {id: 5, title: 'SDD', description: '1TB'}
  ];
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
        <Image width={300} height={300} src={item.img}/>
        </Col>
        <Col md={4}>
          <Row className={['d-flex', 'align-items-center', 'flex-column'].join(' ')}>
            <h2>{item.name}</h2>
            <div
              className={['d-flex', 'align-items-center', 'justify-content-center'].join(' ')}
              style={{background: `url(${bigStar}) no-repeat center center`, width: '240px', height: '240px', backgroundSize: 'cover', fontSize: '48px'}}
            >
              {item.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className={['d-flex', 'flex-column', 'align-items-center', 'justify-content-around'].join(' ')}
            style={{width: '300px', height: '300px', fontSize: '32px', border: '5px solid lightgray'}}
          >
            <h3>from {item.price} &#8372;</h3>
            <Button variant={'outline-dark'}>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className={['d-flex', 'flex-column', 'm-3'].join(' ')}>
        <h2>Properties</h2>
        {itemInfo.map((info, idx) => 
          <Row 
            key={info.id}
            style={{background: idx % 2 === 0 ? 'lightgrey' : 'transparent', padding: '10px'}}
          >
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default ItemPage;