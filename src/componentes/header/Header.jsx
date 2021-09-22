import React from 'react';
// import NavbarRB from '../navbar/Navbar';
import './header.css';

import{faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarRB from '../navbar/Navbar';
import { NavLink } from 'react-router-dom';

export default function Header({page, titulo, button, subtitulo}) {

  return (
    <div className={`header-style background-${page}`}>
      <NavbarRB/>
      <div className="h-75 d-flex flex-column justify-content-between align-items-center">
            <div className="my-5 text-center efecto-artesanal">
               <h1>{titulo}</h1> 
               <h4>{subtitulo}</h4> 
                <button href="#" className="mt-5 boton-artesanal">{button}</button>
            </div>
            {/* <div  as={NavLink} to={`/${page}/container`}>
            <FontAwesomeIcon className="circleArrow" icon={faChevronCircleDown}/>
            </div> */}
      </div>
    </div>
  );
}
