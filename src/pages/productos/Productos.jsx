
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../../componentes/header/Header'
import { Producto } from '../../componentes/producto/Producto'


export const Productos = () => {
    return (
        <div>
            <Header
                page="productos"
                titulo="De Argentina a Madrid"
                subtitulo="Increible variedad y sabores!"
                button="Todos nuestros CocoAlfajores"
            />
            <Container>
            <Row className="mb-5">
                  {/* hacer un map y traer los productos de producto */}
                  <Producto/>
            </Row>
            </Container>


        </div>
    )
}
