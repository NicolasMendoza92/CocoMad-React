import React from 'react';
import './header.css';

import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarRB } from '../navbar/Navbar';
import { useLocation } from 'react-router';


export const Header = () => {


  // Se usa useLocation para poder cambiar el estilo de la pagina 
  const path = useLocation().pathname;
  const location = path.split("/")[1];


  const scrollDown = () => {
    window.scrollTo(0, 1000);
  }

  return (
    <div className={`header-style background-${location}`}>
      <NavbarRB />
      <div className="h-75 d-flex flex-column justify-content-between align-items-center">
        <div className="my-5 text-center efecto-artesanal">
          <h1> </h1>
          {/* <h4>{subtitulo}</h4>
          <button href="#" className="mt-5 boton-artesanal">{button}</button> */}
        </div>
        <button className="boton-down" onClick={scrollDown}>
          <FontAwesomeIcon className="circleArrow" icon={faChevronCircleDown} />
        </button>
      </div>
    </div>
  );
}
