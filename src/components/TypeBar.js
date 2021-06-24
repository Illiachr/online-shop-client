import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';

const TypeBar = () => {
  const { items } = useContext(Context);
  return (
    <ListGroup>
      {
        items.types.map(type => 
          <ListGroup.Item
            style={{cursor: 'pointer'}}
            active={type.id === items.selectedType.id}
            onClick={() => items.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        )
      }
    </ListGroup>
  );
};

export default observer(TypeBar);