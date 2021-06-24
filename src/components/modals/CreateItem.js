import React, { useContext, useState } from 'react';
import { Row, Col, Form, Button, Modal, Dropdown } from 'react-bootstrap';
import { Context } from '../../index';

const CreateItem = ({show, onHide}) => {
  const { items } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', pid: Date.now()}]);
  };

  const rmInfo = (pid) => {
    setInfo(info.filter(i => i.pid !== pid));
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
          New Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {items.types.map(type => 
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {items.brands.map(brand => 
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-2"
            placeholder='Enter item name'
          />
          <Form.Control
            className="mt-2"
            placeholder='Enter item price'
            type='number'
          />
          <Form.Control
            className="mt-2"
            placeholder='Add item image'
            type='file'
          />
        </Form>
        <hr/>
        <Button
          variant={'outline-dark'}
          onClick={addInfo}
        >
          Add property
        </Button>
        {info.map(i =>
          <Row key={i.pid} className="mt-2">
            <Col md={4}>
              <Form.Control
                placeholder='Enter property title'
              />
            </Col>
            <Col md={4}>
              <Form.Control
                placeholder='Enter property description'
              />
            </Col>
            <Col md={4}>
              <Button
                variant='outline-danger'
                onClick={() => rmInfo(i.pid)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
        <Button variant={'outline-success'} onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateItem;