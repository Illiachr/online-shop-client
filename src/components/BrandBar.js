import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Row, Card } from 'react-bootstrap';

const TypeBar = () => {
  const { items } = useContext(Context);
  return (
    <Row className='d-flex'>
      {
        items.brands.map(brand => 
          <Card
            className='p-3 mr-2'
            style={{cursor: 'pointer'}}
            border={brand.id === items.selectedBrand.id ? 'danger' : 'light'}
            onClick={() => items.setSelectedBrand(brand)}
            key={brand.id}
          >
            {brand.name}
          </Card>
        )
      }
    </Row>
  );
};

export default observer(TypeBar);