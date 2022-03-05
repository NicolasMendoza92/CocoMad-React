
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import "./ubicacion.css"

export const Ubicacion = () => {


    return (
        <div className="apertura my-3 text-center">
            <h2>VEN A CONOCER NUESTRA TIENDA</h2>
            <div className="d-flex flex-column align-items-center mb-2">
                <p className="mb-0 ms-2"><b>Visitanos en:</b> Calle Evaristo San Miguel 9, Madrid, España</p>
                <a href="https://goo.gl/maps/UZGbBXefVtGrcYVs5" target="blank" className="mx-2"> <b>Ver en el Mapa!</b><FaMapMarkerAlt /></a>
            </div>
            <div className="d-flex flex-column mb-2">
                <h2>Estamos abiertos al publico de Lunes a Sabados</h2>
                <ul>
                    <li> <b> Lunes:</b> 12:00 am a 20:00 pm</li>
                    <li><b>Martes a Viernes:</b>  8:30 am a 13:00pm y de 16:30pm a 20:00 pm</li>
                    <li> <b>Sabados:</b>  10:30 am a 18:30 pm </li>
                </ul>
                <p className="mb-0 ms-2">Seguinos en <a href="https://www.instagram.com/cocomadbakery/" target="blank" >Instagram</a> y enterate de actualizaciones de horarios </p>
            </div>
        </div>
    )
}
