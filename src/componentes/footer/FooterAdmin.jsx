import React from 'react'
import { Nav } from 'react-bootstrap'
import { FaArrowUp } from 'react-icons/fa'

export const FooterAdmin = () => {
    return (
        <div className="mt-auto footer-admin">
            <div className="row text-center align-items-center">
                <Nav className="me-auto">
                    <Nav.Link href="/userList">Usuarios</Nav.Link>
                    <Nav.Link href="/messageList">Mensajes</Nav.Link>
                    <Nav.Link href="/saleList">Ventas</Nav.Link>
                </Nav>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <b>© 2019 CocoMad Bakery All rights reserved</b>
                <Nav.Link href="/">Ventas<FaArrowUp /> </Nav.Link> 
            </div>
        </div>
    )
}
