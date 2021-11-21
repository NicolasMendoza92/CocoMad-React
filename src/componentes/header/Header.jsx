import React from 'react';
import './header.css';

import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from '../navbar/Navbar';
import { useHistory, useLocation } from 'react-router';
import { SubHeader } from './SubHeader';


export const Header = ({user, setSerch}) => {

  const history = useHistory();

  // Se usa useLocation para poder cambiar el estilo de la pagina 
  const path = useLocation().pathname;
  const currentlocation = path.split("/")[1];

  // Para ubicar los estilos
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");


  const scrollDown = () => {
    window.scrollTo(0, 1000);
  }

  const filter = (e) => {
    e.preventDefault();
    const keyword = e.target.value;
    history.push('/productos');
    setSerch(keyword);
};

  return (
    <>
      {splitLocation[1] !== "login"
        && splitLocation[1] !== "register"
        && splitLocation[1] !== "carrito"
        && splitLocation[1] !== "favoritos"
        && splitLocation[1] !== "perfil"
        && splitLocation[1] !== "productList"
        && splitLocation[1] !== "userList"
        && splitLocation[1] !== "messageList"
        && splitLocation[1] !== "saleList"
        &&
        <div className={`header-style-${currentlocation}`}>
          <Navbar user={user} filter={filter} />
          <div className="h-50 d-flex flex-column justify-content-between align-items-center">
            <div className="my-5 text-center efecto-artesanal">
              { splitLocation[1] === "" && <h1> ALFAJORES ARGENTINOS 100% ARTESANOS </h1>}
              { splitLocation[1] === "productos" && <h1> DE ARGENTINA A MADRID, PRUEBA NUEVOS SABORES </h1>}
              { splitLocation[1] === "nosotros" && <h1> CONOCE NUESTRA HISTORIA Y QUIENES SOMOS </h1>}
              { splitLocation[1] === "contacto" && <h1> VEN A VISITARNOS!! </h1>}
              
            </div>
            <button className="boton-down" onClick={scrollDown}>
              <FontAwesomeIcon className="circleArrow" icon={faChevronCircleDown} />
            </button>
          </div>
        </div >

      }

      {splitLocation[1] === "login" && <SubHeader user={user} />}
      {splitLocation[1] === "register" && <SubHeader user={user}  />}
      {splitLocation[1] === "carrito" && <SubHeader user={user} />}
      {splitLocation[1] === "favoritos" && <SubHeader user={user} />}
      {splitLocation[1] === "perfil" && <SubHeader user={user} />}
      {splitLocation[1] === "productList" && <SubHeader user={user} />}
      {splitLocation[1] === "messageList" && <SubHeader user={user}  />}
      {splitLocation[1] === "userList" && <SubHeader user={user}  />}
      {splitLocation[1] === "saleList" && <SubHeader user={user}  />}

    </>
  );
}
