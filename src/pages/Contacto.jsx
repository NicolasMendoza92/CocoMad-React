import React from 'react'
import { Container } from 'react-bootstrap'
import { Formulario } from '../componentes/formulario/Formulario'
import { Ubicacion } from '../componentes/ubicacion/Ubicacion'


export default function Contacto () {
    return (
        <>
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
