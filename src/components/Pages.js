import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Pagination } from 'react-bootstrap';

const setArray = (count) => {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(i + 1);
  }
  return arr;
};

const Pages = () => {
  const { items } = useContext(Context);
  const pagesCount = Math.ceil(items.totalCount / items.limit);
  const pages = setArray(pagesCount);

  return (
    <Pagination className='mt-5'>
      {pages.map((page, idx) =>
        <Pagination.Item key={`${idx}_${Date.now()}`}>{page}</Pagination.Item>
      )}
    </Pagination>
  );
};

export default observer(Pages);