
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import "./ubicacion.css"

export const Ubicacion = () => {


    return (
        <div className="apertura my-3 text-center mt-5 mb-5">
            <h2>VEN A CONOCER NUESTRA TIENDA</h2>
            <div className="d-flex flex-column align-items-center mb-2">
                <p className="mb-0 ms-2"><b style={{color:"rgb(146, 210, 226)"}}>Visitanos en:</b> Calle Evaristo San Miguel 9, Madrid, España</p>
                <a href="https://goo.gl/maps/UZGbBXefVtGrcYVs5" target="blank" className="mx-2"> <b>Ver en el Mapa!</b><FaMapMarkerAlt /></a>
            </div>
            <div className="d-flex flex-column mb-2">
                <h2>Estamos abiertos al publico de Lunes a Sabados</h2>
                <ul>
                    <li> <b style={{color:"rgb(146, 210, 226)"}}> Lunes:</b> 12:00am a 20:00pm</li>
                    <li><b style={{color:"rgb(146, 210, 226)"}}>Martes a Viernes:</b>  8:30am a 13:00pm y de 16:30pm a 20:00pm</li>
                    <li> <b style={{color:"rgb(146, 210, 226)"}}>Sabados:</b>  10:30am a 18:30pm </li>
                </ul>
                <p className="mb-0 ms-2">Seguinos en <a href="https://www.instagram.com/cocomadbakery/" target="blank" style={{color:"rgb(231, 170, 107)"}} >Instagram</a> y enterate de actualizaciones de horarios </p>
            </div>
        </div>
    )
}
