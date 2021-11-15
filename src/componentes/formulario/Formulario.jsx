import React from 'react'
import "./formulario.css"


export const Formulario = () => {
    return (
        <div className="inscribite">
            <div className="formu p-3">
                <p>¡Inscribete para recibir nuestras promociones y descuentos!</p>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="name" className="form-control" id="floatingPassword" placeholder="Nombre" />
                    <label for="floatingPassword">Nombre</label>
                </div>
                <div className="d-grid gap-2 mb-4">
                    <button href="#" className="boton-suscribe">Suscribeme</button>
                </div>
            </div>
        </div>
    )
}
