import React, { useState } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { BsCartDash, BsCartFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { FaShareSquare } from 'react-icons/fa';
import { leerDeLocalStorage } from '../../utils/localStorage';
import './navbar.css';
import { NavbarAdmin } from './NavbarAdmin';
import { NavbarMobile } from './NavbarMobile';
import { NavbarSearch } from './NavbarSearch';


export const Navbar = ({ user, setSearch, cart }) => {

    const history = useHistory();

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

    const filter = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        setSearch(keyword);
    };

    const buscarSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push('/productos');
        window.scrollTo(0, 850);
        e.target.reset();
    }


    return (
        <>
            {splitLocation[1] !== "productList"
                && splitLocation[1] !== "messageList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "saleList"
                && splitLocation[1] !== "deliveryList"
                && splitLocation[1] !== "adminBoard"
                &&
                <>
                    <nav>
                        <Container bg="none" className="py-2">
                            <div className=" contenedor " >
                                <div className="d-block d-md-none ">
                                    <button
                                        className="navbar-button"
                                        onClick={handleShow}>
                                        <GiHamburgerMenu />
                                    </button>
                                </div>
                                <div className="logo-container" >
                                    <Link as={NavLink} to="/"  >
                                        <img id="main-img" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647437646/cocoMAD/LOGO_CON_CIRCULO-02_1_ya2rd3.png" alt="img logo" className="nav-logo-desktop" />
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
                                                className="text-center" as={NavLink} to="/adminBoard">
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

                                    <div className="d-flex align-items-center position-relative">
                                        <Nav.Link className="link-nav" as={NavLink} to="/carrito" exact>
                                            {splitLocation[1] === "carrito" ? <BsCartFill /> : <BsCartDash />} </Nav.Link>
                                        {cart.length > 0 &&
                                            <span className="swym-header--count">{cart.length}</span>
                                        }
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
                    <nav className="bg-none">
                        <NavbarSearch filter={filter} buscarSubmit={buscarSubmit} />
                    </nav>
                </>
            }
            {splitLocation[1] !== "productList"
                && splitLocation[1] !== "messageList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "saleList"
                && splitLocation[1] !== "deliveryList"
                && splitLocation[1] !== "adminBoard"
                &&
                <NavbarMobile setShow={setShow} show={show} user={user} />
            }
            {splitLocation[1] === "productList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "messageList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "userList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "saleList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "deliveryList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "adminBoard" && <NavbarAdmin user={user} />}
        </>
    );
}
