import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function NavbarRB() {
    return (
        <Navbar bg="none" expand="lg" variant="dark">
            <Container>
                <Nav>
                    <Nav.Link className="nav-link link-nav link-home" as={NavLink} to="/" exact>COCOMAD</Nav.Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link className="link-nav" as={NavLink} to="/productos" exact>PRODUCTO</Nav.Link>
                        <Nav.Link className="link-nav" as={NavLink} to="/nosotros" exact>NOSOTROS</Nav.Link>
                        <Nav.Link className="link-nav" as={NavLink} to="/contacto" exact>CONTACTO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
