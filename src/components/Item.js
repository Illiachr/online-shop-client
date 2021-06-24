import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../assets/star.svg';
import { ITEM_ROUTE } from '../const';

const Item = ({item}) => {
  const STATIC_URL = process.env.REACT_APP_API_SCHEME + process.env.REACT_APP_API_HOST;
  const history = useHistory();
  return (
    <Col md={3} className='mt-3' onClick={() => history.push(`${ITEM_ROUTE}/${item.id}`)}>
      <Card style={{width: '200px', cursor: 'pointer'}} border={'light'}>
        <Image width={200} height={200} src={STATIC_URL + '/' + item.img}/>
        <div className={['text-black-50', 'mt-1', 'p-2', 'd-flex', 'justify-content-between', 'align-items-center'].join(' ')}>
          <div>Samsung...</div>
          <div className={['d-flex', 'align-items-center'].join(' ')}>
            <div className='mr-1'>{item.rating}</div>
            <Image width={18} height={18} src={star}/>
          </div>
        </div>
        <div className='pl-2'>{item.name}</div>
      </Card>
    </Col>
  );
};

export default Item;