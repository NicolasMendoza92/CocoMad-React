import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function NavbarRB() {
    return (
        <Navbar bg="none" expand="lg">
            <Container className="barranav">
            <Nav.Link as={NavLink} to="/" exact activeClassName="text-white" >COCOMAD</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link className="link-nav" as={NavLink} to="/productos" exact activeClassName="text-white" >PRODUCTO</Nav.Link>
                        <Nav.Link className="link-nav" as={NavLink} to="/nosotros" exact activeClassName="text-white" >NOSOTROS</Nav.Link>
                        <Nav.Link className="link-nav" as={NavLink} to="/contacto" exact activeClassName="text-white">CONTACTO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
