import React from 'react';
import NavbarRB from '../navbar/Navbar';
import './header.css';

export default function Header() {
  return (
    <>
    <div className="ppal-image">
    <NavbarRB/>
            <div className="mt-3 text-center efecto-artesanal">
                <h1> Alfajores Argentinos 100% Artesanales</h1>
                <p>Conoce nuestra historia y quienes somos</p>
                <button href="#" className="boton-artesanal">Quiero saber mas!</button>
            </div>
    </div>
    </>
  );
}
