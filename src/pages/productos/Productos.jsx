
import React from 'react'
import { Col, Row } from 'react-bootstrap'
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
            <Row className="mb-5">
                <Col className="col-12 col-lg-4 d-flex flex-column justify-content-between ">
                  {/* hacer un map y traer los productos de producto */}
                  <Producto/>
                </Col>
            </Row>


        </div>
    )
}
