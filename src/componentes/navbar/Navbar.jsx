import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavbarRB() {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">COCOMAD</Nav.Link>
                        <Nav.Link href="#link">PRODUCTOS</Nav.Link>
                        <Nav.Link href="#link">NOSOTROS</Nav.Link>
                        <Nav.Link href="#link">CONTACTENOS</Nav.Link>
                        <Nav.Link href="#link">BUY</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
