import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import bigStar from '../assets/star-big.svg'
import { fetchOneItem } from '../http/itemAPI';

const ItemPage = () => {
  const STATIC_URL = process.env.REACT_APP_API_SCHEME + process.env.REACT_APP_API_HOST;
  const [item, setItem] = useState({info: []});

  const { id } = useParams();

  useEffect(() => {
    fetchOneItem(id).then(data => {
      setItem(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
        <Image width={300} height={300} src={`${STATIC_URL}/${item.img}`}/>
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
        {item.info.map((info, idx) => 
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