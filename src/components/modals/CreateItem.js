/* eslint-disable react-hooks/exhaustive-deps */
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Form, Button, Modal, Dropdown } from 'react-bootstrap';
import { createItem, fetchBrands, fetchItems, fetchTypes } from '../../http/itemAPI';
import { Context } from '../../index';

const CreateItem = ({show, onHide}) => {
  const { items } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', pid: Date.now()}]);
  };

  const changeInfo = (key, value, pid) => {
    setInfo(info.map(i => i.pid === pid ? {...i, [key]: value} : i));
  };

  const rmInfo = (pid) => {
    setInfo(info.filter(i => i.pid !== pid));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addItem = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('typeId', items.selectedType.id);
    formData.append('brandId', items.selectedBrand.id);
    formData.append('info', JSON.stringify(info)); 

    createItem(formData).then(data => {
      console.log(data);
      onHide();
    });
  };

  useEffect(() => {
    fetchTypes().then(data => items.setTypes(data));
    fetchBrands().then(data => items.setBrands(data));
    fetchItems().then(data => items.setItems(data.rows));
  }, []);
  
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
            <Dropdown.Toggle>{items.selectedType.name || 'Choose type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {items.types.map(type => 
                <Dropdown.Item
                  key={type.id}
                  onClick={e => items.setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>{items.selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {items.brands.map(brand => 
                <Dropdown.Item 
                  key={brand.id}
                  onClick={e => items.setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-2"
            placeholder='Enter item name'
          />
          <Form.Control
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="mt-2"
            placeholder='Enter item price'
            type='number'
          />
          <Form.Control
            className="mt-2"
            onChange={selectFile}
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
                value={i.title}
                onChange={e => changeInfo('title', e.target.value, i.pid)}
                placeholder='Enter property title'
              />
            </Col>
            <Col md={4}>
              <Form.Control
                value={i.description}
                onChange={e => changeInfo('description', e.target.value, i.pid)}
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
        <Button variant={'outline-success'} onClick={addItem}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default observer(CreateItem);