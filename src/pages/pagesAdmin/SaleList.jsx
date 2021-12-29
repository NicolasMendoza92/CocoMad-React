import React from 'react';
import { Container } from 'react-bootstrap';
import { TableSales } from '../../componentes/tablesAdmin/TableSales';

export default function SaleList({ getSales, tableSales, setTableSales,getDeliverys, deliverys, setDeliverys }) {
  return (
    <Container>
                <h2 className="title-style my-2">Ventas</h2>
                <TableSales getSales={getSales} tableSales={tableSales} setTableSales={setTableSales} 
                getDeliverys={getDeliverys} setDeliverys={setDeliverys} deliverys={deliverys} />
            </Container>
  );
}
