import React from 'react'
import { Container } from 'react-bootstrap'
import { Historia } from '../componentes/about-us/Historia'
import { HistoriaAcord } from '../componentes/about-us/HistoriaAcord'
import { HistoriaCarrousel } from '../componentes/about-us/HistoriaCarrousel'

export default function Nosotros() {
    return (    
            <Container>  
                    <Historia />
                    <HistoriaAcord />
                    <HistoriaCarrousel  />
            </Container>

    )
}
