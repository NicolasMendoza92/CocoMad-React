import React from 'react'
import { Navbar } from '../navbar/Navbar';
import { useLocation } from 'react-router';
import './header.css';

export const SubHeader = (user) => {

     // Se usa useLocation para poder cambiar el estilo de la pagina 
  const path = useLocation().pathname;
  const currentlocation = path.split("/")[1];

    return (

        <div className={`header-style-${currentlocation}`}>
        <Navbar user={user} />
        </div>
  
    )
}



