import React from 'react';
import './header.css';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from '../navbar/Navbar';
import { useLocation } from 'react-router';
import { SubHeader } from './SubHeader';


export const Header = ({user, setSerch, cart}) => {



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


  return (
    <>
      {splitLocation[1] !== "login"
        && splitLocation[1] !== "register"
        && splitLocation[1] !== "perfil"
        && splitLocation[1] !== "carrito"
        && splitLocation[1] !== "detalle"
        && splitLocation[1] !== "productList"
        && splitLocation[1] !== "userList"
        && splitLocation[1] !== "messageList"
        && splitLocation[1] !== "saleList"
        &&
        <div className={`header-style-${currentlocation}`}>
          <Navbar user={user} setSerch={setSerch} cart={cart} />
          <div className="h-50 d-flex flex-column justify-content-between align-items-center">
            <div className="my-5 text-center efecto-artesanal">
              { splitLocation[1] === "" && <h1> ALFAJORES ARGENTINOS 100% ARTESANOS </h1>}
              { splitLocation[1] === "productos" && <h1> DE TUCUMAN A MADRID, PRUEBA NUEVOS SABORES </h1>}
              { splitLocation[1] === "nosotros" && <h1> CONOCE NUESTRA HISTORIA Y QUIENES SOMOS </h1>}
              { splitLocation[1] === "contacto" && <h1> VEN A VISITARNOS!! </h1>}
            </div>
            <button className="boton-down" onClick={scrollDown}>
              <FontAwesomeIcon className="circleArrow" icon={faChevronCircleDown} />
            </button>
          </div>
        </div >

      }

      {splitLocation[1] === "login" && <SubHeader user={user} cart={cart}/>}
      {splitLocation[1] === "register" && <SubHeader user={user} cart={cart}/>}
      {splitLocation[1] === "carrito" && <SubHeader user={user} cart={cart}/>}
      {splitLocation[1] === "detalle" && <SubHeader user={user} cart={cart}/>}
      {splitLocation[1] === "perfil" && <SubHeader user={user} cart={cart}/>}
      {splitLocation[1] === "productList" && <SubHeader user={user} />}
      {splitLocation[1] === "messageList" && <SubHeader user={user}  />}
      {splitLocation[1] === "userList" && <SubHeader user={user}  />}
      {splitLocation[1] === "saleList" && <SubHeader user={user}  />}

    </>
  );
}
