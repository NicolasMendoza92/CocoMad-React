import React from 'react'
import { Nav, NavLink, Offcanvas } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram, GrTwitter } from 'react-icons/gr';
import { VscClose } from 'react-icons/vsc';

export const NavbarMobile = ({ setShow, show }) => {

  const handleClose = () => setShow(false);

  const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('favorites');
    // localStorage.removeItem('cart');
    window.location.href = '/';
  }

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} className="responsive-navbar text-white">
        <Offcanvas.Header className="responsive-navbar-header">
          <div className="logo-container" >
            <NavLink as={NavLink} to="/home" onClick={handleClose}>
              <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1636994115/cocoMAD/logo_blanco_rmmuf2.png" alt="img logo" className="nav-logo-desktop" />
            </NavLink>
          </div>
          <button type="button" aria-label="Close" className="navbar-button mx-1" onClick={handleClose} ><VscClose /></button>
        </Offcanvas.Header>
        <Offcanvas.Header className="d-flex justify-content-evenly">
          <a href="/login">
            <button className="boton-artesanal-cel">Iniciar sesión</button>
          </a>
          <a href="/register">
            <button className="boton-artesanal-cel">Registrarse</button>
          </a>
        </Offcanvas.Header>

        <Offcanvas.Header className="d-flex flex-column text-center bienvenido-user">
          <p>Bienvenido Sr/a </p>
          <div>
            <NavLink as={NavLink} to="/home" onClick={handleClose}>
              <button className="boton-artesanal-cel px-4" >Mi Perfil</button>
            </NavLink>
            <button onClick={logout} className="boton-artesanal-cel">Cerrar Sesion</button>
          </div>
        </Offcanvas.Header>

        {/* si esta registrado un usuario admin entonces se muestra */}
        {/* {user.role === 'admin'
                &&
                <Offcanvas.Header className="d-flex flex-column bienvenido-user">
                    <p>Bienvenido Sr/a {user.name}</p>
                    <div className="d-flex justify-content-evenly">
                        <NavLink  as={NavLink} to="/myProfile" onClick={handleClose} >
                            <button className="boton-artesanal-cel px-4">Mi Perfil</button>
                        </NavLink>
                        <button onClick={logout} className="boton-artesanal-cel p-1">Cerrar Sesion</button>
                    </div>
                </Offcanvas.Header>
            } */}
        <Offcanvas.Body >
          <div className="responsive-navbar-links text-center ">
            <li className="p-2 mx-3" >
              <Nav.Link as={NavLink} to="/productos" exact activeClassName="link-active" onClick={handleClose}>PRODUCTOS</Nav.Link>
            </li>
            <li className="p-2 mx-3">
              <Nav.Link as={NavLink} to="/contacto" activeClassName="link-active" onClick={handleClose}>CONTACTO</Nav.Link>
            </li>
            <li className="p-2 mx-3">
              <Nav.Link as={NavLink} to="/nosotros" activeClassName="link-active" onClick={handleClose}>NOSOTROS</Nav.Link>
            </li>
            {/* {user.role === 'admin' &&      
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/adminBoard" activeClassName="link-active"><FaWrench className="mb-1 me-2" />ADMIN BOARD</Nav.Link>
                    </li>
                    } */}

          </div>
          <div className="navbar-responsive-redes">
            <Offcanvas.Title className="navbar-responsive-subtitle mt-3">Seguinos en nuestras redes</Offcanvas.Title>
            <div className="navbar-responsive-icons-container d-flex justify-content-evenly my-5">
              <li>
                <a href="/facebook" className="face-icon"><BsFacebook /></a>
              </li>
              <li>
                <a href="/twitter" className="twitter-icon"><GrTwitter /></a>
              </li>
              <li>
                <a href="/instagram" className="twitter-icon"><GrInstagram /></a>
              </li>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )}

