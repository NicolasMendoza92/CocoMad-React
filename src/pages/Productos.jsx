
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Header } from '../componentes/header/Header'
import { CardsProduct } from '../componentes/producto/CardsProduct'
import { Sidebar } from '../componentes/sidebarProduct/Sidebar'
import { SliderProducts } from '../componentes/sliderProducts/SliderProducts';


export default function Productos () {

    let products = [
        {
          id: "1",
          img: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
          title: "torta 1",
          price: "$42.99",
        },
        {
          id: "2",
          img: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
          title: "torta 2",
          price: "$40.00",
        },
        {
          id: "3",
          img: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
          title: "torta 3",
          price: "$29.99",
        },
        {
          id: "4",
          img: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
          title: "torta 4",
          price: "$34.99",
        },
      ];

    return (
        <div>
            <Header
                page="productos"
                titulo="De Argentina a Madrid"
                subtitulo="Increible variedad y sabores!"
                button="Todos nuestros CocoAlfajores"
            />
            <Container>
                <Row>
                    <Col className="col-12 col-md-3  columnaFiltros">
                        <Sidebar />
                    </Col>
                    <Col className="col-12 col-md-9 columnaProductos p-0">
                        <CardsProduct products={products}/>
                    </Col>
                </Row>
                <SliderProducts />
            </Container>


        </div>
    )
}
