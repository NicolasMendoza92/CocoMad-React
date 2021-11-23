import React from 'react'
import { NavbarSmall } from '../navbar/NavbarSmall';
import { useLocation } from 'react-router';
import './header.css';

export const SubHeader = ({user, setSerch}) => {

     // Se usa useLocation para poder cambiar el estilo de la pagina 
  const path = useLocation().pathname;
  const currentlocation = path.split("/")[1];

    return (

        <div className={`header-style-${currentlocation}`}>
        <NavbarSmall user={user} setSerch={setSerch}/>
        </div>
  
    )
}



