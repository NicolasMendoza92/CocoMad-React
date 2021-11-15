import React from 'react'
import { Historia } from '../componentes/about-us/Historia'
import { HistoriaCarrousel } from '../componentes/about-us/HistoriaCarrousel'
import {Header} from '../componentes/header/Header'

export default function Nosotros () {
    return (
        <>
            <Header 
            page="about"
            titulo="Gracias por visitarnos"
            subtitulo="Se parte de la cultura COCOMAD"
            button="Quiero conocer mas"
            />
            <div className="row gx-3 gy-2 p-4 mb-4">
                 <div className="col-12 col-xxl-6 p-3">
                 <Historia />
                 </div>
                 <div class="col-12 col-xxl-6 d-flex align-items-center justify-content-center">
                     <HistoriaCarrousel/>
                 </div>
             </div>
            
        </>
    )
}
