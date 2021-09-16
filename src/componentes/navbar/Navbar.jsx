import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

export default function NavbarRB(props) {
    let backgroundNavbar;
    if (props.section === 'productos'){
        backgroundNavbar = true;
    } else {
        backgroundNavbar = false;
    }
    return (
        <Navbar className={backgroundNavbar ? 'navbar-2' : 'navbar'} bg="none" expand="lg">
            <Container className="barranav">
                <a onClick={() => props.setSection('home')} href="#home">COCOMAD</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <a onClick={() => props.setSection('productos')}  className="ms-2 me-2 p-3" href="#link">PRODUCTOS</a>
                        <a onClick={() => props.setSection('nosotros')} className="ms-2 me-2 p-3" href="#link">NOSOTROS</a>
                        <a onClick={() => props.setSection('contactenos')} className="ms-2 me-2 p-3" href="#link">CONTACTENOS</a>
                        <a onClick={() => props.setSection('buy')} className="ms-2 me-2 p-3" href="#link">BUY</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
