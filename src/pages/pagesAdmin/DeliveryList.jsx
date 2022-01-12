import React from 'react';
import { Container } from 'react-bootstrap';
import { TableDeliveries } from '../../componentes/tablesAdmin/TableDeliveries';

export default function DeliveryList({getDeliveries, deliveries, setDeliveries }) {
  return (
    <Container>
                <h2 className="title-style my-2">Ventas</h2>
                <TableDeliveries getDeliveries={getDeliveries} setDeliveries={setDeliveries} deliveries={deliveries} />
            </Container>
  );
}