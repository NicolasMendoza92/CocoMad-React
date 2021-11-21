
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardsProducts } from '../componentes/producto/CardsProducts'
import { Sidebar } from '../componentes/sidebarProduct/Sidebar'
import { SliderProducts } from '../componentes/sliderProducts/SliderProducts';


export default function Productos () {

    let products = [
        {
          id: "1",
          image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
          name: "torta 1",
          price: "$42.99",
        },
        {
          id: "2",
          image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
          name: "torta 2",
          price: "$40.00",
        },
        {
          id: "3",
          image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
         name: "torta 3",
          price: "$29.99",
        },
        {
          id: "4",
          image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
          name: "torta 4",
          price: "$34.99",
        },
      ];

    return (
        <div>
            <Container>
                <Row>
                    <Col className="col-12 col-md-3  columnaFiltros">
                        <Sidebar />
                    </Col>
                    <Col className="col-12 col-md-9 columnaProductos p-0">
                        <CardsProducts products={products}/>
                    </Col>
                </Row>
                <SliderProducts />
            </Container>


        </div>
    )
}
