import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/itemAPI';

const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({name: value}).then(() => {
      setValue('');
      onHide();
    });
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter brand name"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
        <Button variant={'outline-success'} onClick={addBrand}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;