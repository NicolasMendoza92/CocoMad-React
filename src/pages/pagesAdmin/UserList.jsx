import React from 'react';
import { Container } from 'react-bootstrap';
import { TableUsers } from '../../componentes/tablesAdmin/TableUsers';

export default function UserList({tableUsers, user, setTableUsers, getUsers}) {
  return (
    <Container>
    <h2 className="title-style my-2">Usuarios registrados</h2>
    <TableUsers user={user} tableUsers={tableUsers} setTableUsers={setTableUsers} getUsers={getUsers} />
  </Container>
  );
}

