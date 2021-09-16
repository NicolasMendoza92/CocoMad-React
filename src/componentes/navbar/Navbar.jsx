import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

export default function NavbarRB (props) {
    return (
        <Navbar bg="trasnparent" variant="light" expand="lg">
            <Container className="barranav">
                <a onClick={()=> {props.setSection('home')}} className="logo" href="#home">COCOMAD</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-links">
                        <a onClick={()=> {props.setSection('productos')}} className="ms-2 me-2 p-3" href="#link">PRODUCTOS</a>
                        <a onClick={()=> {props.setSection('nosotros')}} className="ms-2 me-2 p-3" href="#link">NOSOTROS</a>
                        <a onClick={()=> {props.setSection('concatenos')}} className="ms-2 me-2 p-3" href="#link">CONTACTENOS</a>
                        <a className="ms-2 me-2 p-3" href="#link"><i class="fas fa-shopping-bag"></i></a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
