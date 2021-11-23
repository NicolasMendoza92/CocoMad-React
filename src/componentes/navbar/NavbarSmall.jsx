import React, { useState } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { BsCartDash, BsCartFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { NavbarMobile } from './NavbarMobile';
import './navbar.css';
import { NavbarAdmin } from './NavbarAdmin';
import { FaShareSquare } from 'react-icons/fa';
import { leerDeLocalStorage } from '../../utils/localStorage';



export const NavbarSmall = ({ user }) => {

    const tokenLocal = leerDeLocalStorage('token') || {};

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    

    return (
        <>
            {splitLocation[1] !== "productList"
                && splitLocation[1] !== "messageList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "saleList"
                &&
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
                                    <Link as={NavLink} to="/"  >
                                        <img id="main-img" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637589150/cocoMAD/cocomad_logo_grue_blanco_cr0it8.png" alt="img logo" className="nav-logo-desktop" />
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center login-register  ">
                                    {!tokenLocal.token
                                        &&
                                        <>
                                            <Nav.Link className="link-nav-log d-none d-md-block" activeClassName="link-active-log" as={NavLink} to="/login" exact>Inicia Sesion</Nav.Link>
                                            <Nav.Link className="link-nav-log d-none d-md-block" activeClassName="link-active-log" as={NavLink} to="/register" exact>Registrate</Nav.Link>
                                        </>
                                    }
                                    {user.role === 'admin' &&
                                        <NavDropdown
                                            className="d-flex align-items-center navbar-user mx-2 d-none d-md-block"
                                            id="nav-dropdown-light-example"
                                            title={<span>Hola {user.name} </span>}
                                            menuVariant="light"
                                        >
                                            <NavDropdown.Item
                                                className="text-center" as={NavLink} to="/productList">
                                                <CgProfile className="mb-1" /> AdminBoard
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item className="text-center" onClick={logout} >
                                                <FaShareSquare className="mb-1" /> Cerrar sesión
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    }
                                    {user.role === 'user' &&
                                        <NavDropdown
                                            className="d-flex align-items-center navbar-user mx-2 d-none d-md-block"
                                            id="nav-dropdown-light-example"
                                            title={<span>Hola {user.name} </span>}
                                            menuVariant="light"
                                        >
                                            <NavDropdown.Item
                                                className="text-center" as={NavLink} to="/perfil">
                                                <CgProfile className="mb-1" /> Mi perfil
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item className="text-center" onClick={logout} >
                                                <FaShareSquare className="mb-1" /> Cerrar sesión
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    }

                                    <div className="d-flex align-items-center">
                                        <Nav.Link className="link-nav" as={NavLink} to="/carrito" exact>
                                            {splitLocation[1] === "carrito" ? <BsCartFill /> : <BsCartDash />} </Nav.Link>
                                        <Nav.Link className="link-nav" as={NavLink} to="/favoritos" exact>
                                            {splitLocation[1] === "favoritos" ? <MdFavorite /> : <MdOutlineFavoriteBorder />}</Nav.Link>
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
                </>
            }
            {splitLocation[1] !== "productList"
                && splitLocation[1] !== "messageList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "saleList"
                &&
                <NavbarMobile setShow={setShow} show={show} user={user} />
            }
            {splitLocation[1] === "productList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "messageList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "userList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "saleList" && <NavbarAdmin user={user} />}
        </>
    );
}
