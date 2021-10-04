import './productos.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../componentes/header/Header'
import { Producto } from '../../componentes/producto/Producto'
import { Sidebar } from '../../componentes/producto/Sidebar'


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
                <div className="row mt-5">
                    <div className="col-md-4 mb-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8 mb-4">
                        <Producto />
                    </div>
                </div>


            </Container>


        </div>
    )
}
