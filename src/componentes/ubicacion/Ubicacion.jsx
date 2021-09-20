import React from 'react'
import "./ubicacion.css"

export const Ubicacion = () => {
    return (
        <div className="apertura mb-2 text-center">
        <h1 className="apertura-title">Estamos abiertos al publico todos los dias</h1>
        <div className="links-contacto d-flex align-items-center mb-2">
            <i className="fas fa-map-marker-alt"></i>
            <p className="mb-0 ms-2">Calle Evaristo San Miguel 9,Madrid, España</p>
        </div>
        <div className="links-contacto d-flex align-items-center mb-2">
            <i className="far fa-clock"></i>
            <p className="mb-0 ms-2">Lunes a Viernes: 8:30am a 13:00pm y 16:30pm a 21:00pm</p>
        </div>
        <div className="links-contacto d-flex align-items-center mb-2">
            <i className="far fa-clock"></i>
            <p className="mb-0 ms-2">Sabados: 10:00am a 16:00pm</p>
        </div>
    </div>
    )
}
