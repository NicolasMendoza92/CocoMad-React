import React from 'react';
import { Container } from 'react-bootstrap';
import { TableSales } from '../../componentes/tablesAdmin/TableSales';

export default function SaleList({ getSales, sales, tableSales, setTableSales }) {
  return (
    <Container>
                <h2 className="title-style my-2">Ventas</h2>
                <TableSales getSales={getSales} sales={sales} tableSales={tableSales} setTableSales={setTableSales} />
            </Container>
  );
}
