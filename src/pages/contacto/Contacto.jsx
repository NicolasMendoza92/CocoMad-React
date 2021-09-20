import React from 'react'
import { Container } from 'react-bootstrap'
import { Formulario } from '../../componentes/formulario/Formulario'
import Header from '../../componentes/header/Header'
import { Ubicacion } from '../../componentes/ubicacion/Ubicacion'
import "./contacto.css"
export const Contacto = () => {
    return (
        <>
            <div>
                <Header
                    page="contacto"
                    titulo="Visita nuestra sede en Madrid"
                    subtitulo="Contactanos por wp y proba nuestros cocoproductos ya!"
                    button="Quiero mandar un wasap ya!"
                />
            </div>
            <Container >
            <div className="row gx-3 gy-2 p-4 mb-4">
                 <div className="col-12 col-lg-6 p-3">
                     <Formulario />
                 </div>
                 <div class="col-12 col-lg-6 d-flex align-items-center inscribite">
                     <Ubicacion/>
                 </div>
             </div>
          
            </Container>
        </>
    )
}
