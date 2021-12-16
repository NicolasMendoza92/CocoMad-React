import React from 'react';
import { Container } from 'react-bootstrap';
import { TableProducts } from '../../componentes/tablesAdmin/TableProducts';

export default function ProductList({tableProducts, getProducts, setTableProducts}) {
  return (
    <Container>
      <h2 className="title-style my-2">Productos</h2>
      <TableProducts tableProducts={tableProducts} getProducts={getProducts} setTableProducts={setTableProducts}  />
    </Container>
  );
}

