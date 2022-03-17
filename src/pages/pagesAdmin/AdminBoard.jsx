import React from 'react';
import { Card, Container, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminBoard() {
    return (
        <>
            <h2 className="title-style text-center my-2">Administrador</h2>
            <Container className='d-flex flex-wrap justify-content-around'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Productos</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Ir ahi</Card.Subtitle>
                        <Link as={NavLink} to="/productList">Ver</Link>
                    </Card.Body>
                </Card><Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Entregas</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Ir ahi</Card.Subtitle>
                        <Link as={NavLink} to="/deliveryList">Ver</Link>
                    </Card.Body>
                </Card><Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Retiros</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Ir ahi</Card.Subtitle>
                        <Link as={NavLink} to="/saleList">Ver</Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}