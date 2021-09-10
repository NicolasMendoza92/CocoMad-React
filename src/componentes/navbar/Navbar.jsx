import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

export default function NavbarRB() {
    return (
        <Navbar bg="none" expand="lg">
            <Container className="barranav">
                <a href="#home">COCOMAD</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <a className="ms-2 me-2 p-3" href="#link">PRODUCTOS</a>
                        <a className="ms-2 me-2 p-3" href="#link">NOSOTROS</a>
                        <a className="ms-2 me-2 p-3" href="#link">CONTACTENOS</a>
                        <a className="ms-2 me-2 p-3" href="#link">BUY</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
