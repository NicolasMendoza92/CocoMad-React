import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { BsCartDash } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import './navbar.css';
import { NavbarMobile } from './NavbarMobile';

export const NavbarRB = () => {


    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <nav>
                <Container bg="none" className="py-2">
                    <div className="d-flex align-items-center justify-content-between contenedor " >
                        <div className="d-block d-md-none ">
                            <button
                                className="navbar-button"
                                onClick={handleShow}>
                                <GiHamburgerMenu />
                            </button>
                        </div>
                        <div className="logo-container" >
                            <Link as={NavLink} to="/home"  >
                                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1636994115/cocoMAD/logo_blanco_rmmuf2.png" alt="img logo" className="nav-logo-desktop" />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center login-register  ">
                            <Nav.Link className="link-nav-log d-none d-md-block" activeClassName="link-active-log" as={NavLink} to="/login" exact>Inicia Sesion</Nav.Link>
                            <Nav.Link className="link-nav-log d-none d-md-block" activeClassName="link-active-log" as={NavLink} to="/register" exact>Registrate</Nav.Link>
                            <div className="d-flex align-items-center">
                                <Nav.Link className="link-nav" as={NavLink} to="/carrito"  exact> <BsCartDash /></Nav.Link>
                                <Nav.Link className="link-nav" as={NavLink} to="/favoritos" exact><MdOutlineFavoriteBorder /></Nav.Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
            <nav>
                <Container bg="none" className="pb-2 d-none d-md-block border-0 ">
                    <div className="d-flex align-items-center justify-content-center w-100 navbar-links">
                        <li className="p-2 mx-3">
                            <Nav.Link className="link-nav" activeClassName="link-active" as={NavLink} to="/productos" exact>PRODUCTOS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link className="link-nav" activeClassName="link-active" as={NavLink} to="/nosotros" exact>NOSOTROS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link className="link-nav" activeClassName="link-active" as={NavLink} to="/contacto" exact>CONTACTO</Nav.Link>
                        </li>


                    </div>
                </Container>
            </nav>

            <NavbarMobile setShow={setShow} show={show} />
        </>
    );
}
