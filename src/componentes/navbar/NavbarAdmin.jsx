import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const NavbarAdmin = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Admin Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/userList">Usuarios</Nav.Link>
                            <Nav.Link href="/messageList">Mensajes</Nav.Link>
                            <Nav.Link href="/saleList">Ventas</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                                <NavDropdown.Item href="/">Ir al Landing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Cerrar Sesion</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
