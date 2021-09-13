import React from 'react';
// import NavbarRB from '../navbar/Navbar';
import './header.css';

import{faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarRB from '../navbar/Navbar';

export default function Header(props) {
  const {section, setSection} = props;


  let backgroundImage;
  if (section === 'home') {
    backgroundImage = true;
  } if (section === 'nosotros'){
    backgroundImage = false;
  }

  return (
    <div className={backgroundImage? 'background-home' : 'background-about'}>
      <NavbarRB setSection={setSection}/>
      <div className="h-75 d-flex flex-column justify-content-between align-items-center">
            <div className="my-5 text-center efecto-artesanal">
                {section === 'home' && <h1> Alfajores Argentinos 100% Artesanales</h1>}
                {section === 'nosotros' && <h1>Conoce nuestra historia y quienes somos</h1>}
                
                <button href="#" className="mt-5 boton-artesanal">Quiero saber mas!</button>
            </div>
            <div>
            <FontAwesomeIcon className="circleArrow" icon={faArrowCircleDown}/>
            </div>
      </div>
    </div>
  );
}
