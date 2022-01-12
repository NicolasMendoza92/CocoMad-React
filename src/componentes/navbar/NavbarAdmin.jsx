import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const NavbarAdmin = () => {
    
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/productList">Admin Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/userList">Usuarios</Nav.Link>
                            <Nav.Link as={NavLink} to="/messageList">Mensajes</Nav.Link>
                            <Nav.Link as={NavLink} to="/saleList">Ventas</Nav.Link>
                            <Nav.Link as={NavLink} to="/deliveryList">Entregas</Nav.Link>
                            <Nav.Link as={NavLink} to="/">Ir al Landing</Nav.Link>
                            <Nav.Link onClick={logout} >Cerrar Sesion</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
