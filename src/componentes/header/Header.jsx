import React from 'react';
import NavbarRB from '../navbar/Navbar';
import './header.css';

export default function Header(props) {
  return (
    <div className="ppal-image">
      <NavbarRB props={props}/>
            <div className="mb-3 text-center efecto-artesanal">
                <h1> Alfajores Argentinos 100% Artesanales</h1>
                <p>Conoce nuestra historia y quienes somos</p>
                <button href="#" className="boton-artesanal">Quiero saber mas!</button>
            </div>
    </div>
  );
}
