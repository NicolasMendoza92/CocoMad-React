import React from 'react';
import { Container } from 'react-bootstrap';
import { TableProducts } from '../../componentes/tablesAdmin/TableProducts';

export default function ProductList({products, getProducts, setProducts}) {
  return (
    <Container>
      <h2 className="title-style my-2">Productos</h2>
      <TableProducts products={products} getProducts={getProducts} setProducts={setProducts} />
    </Container>
  );
}

