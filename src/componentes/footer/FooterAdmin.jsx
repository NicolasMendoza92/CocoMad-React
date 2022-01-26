import React from 'react'
import { Nav } from 'react-bootstrap'
import { FaArrowUp } from 'react-icons/fa'

export const FooterAdmin = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="mt-auto footer-admin">
            <div className="d-flex text-center align-items-center">
                <Nav className="me-auto">
                    <Nav.Link href="/userList">Usuarios</Nav.Link>
                    <Nav.Link href="/messageList">Mensajes</Nav.Link>
                    <Nav.Link href="/saleList">Ventas</Nav.Link>
                    <Nav.Link href="/deliveryList">Entregas</Nav.Link>
                </Nav>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <p>© 2019 CocoMad Bakery All rights reserved</p>
                <p>Mr Ronioza Pages</p>
                <Nav.Link onClick={scrollToTop}><FaArrowUp /> </Nav.Link> 
            </div>
        </div>
    )
}
