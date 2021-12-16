import React from 'react';
import { Container } from 'react-bootstrap';
import { TableMessages } from '../../componentes/tablesAdmin/TableMessages';

export default function MessageList({messages, getMessages,setMessages }) {
  return (
    <Container>
    <h2 className="title-style my-2">Mensajes de clientes</h2>
    <TableMessages messages={messages} getMessages={getMessages} setMessages={setMessages} />
</Container>
  );
}
