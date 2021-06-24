import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateItem from '../components/modals/CreateItem';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState(false);
  return (
    <Container className="mt-3 d-flex flex-column">
      <Button 
      variant={'outline-dark'}
      className='mt-2 p2'
      onClick={() => setTypeVisible(true)}
      >
        Add type
      </Button>
      <Button 
      variant={'outline-dark'}
      className='mt-2 p2'
      onClick={() => setBrandVisible(true)}
      >
        Add brand
      </Button>
      <Button 
      variant={'outline-dark'}
      className='mt-2 p2'
      onClick={() => setItemVisible(true)}
      >
        Add item
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
    </Container>
  );
};

export default Admin;