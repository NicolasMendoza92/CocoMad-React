import './producto.css';
import React from 'react'
import { Card, Col, Row , Button } from 'react-bootstrap'

export const Producto = () => {
    return (
        <div>
            <Row className="mb-5">
            <Col className="col-12 col-lg-4 d-flex flex-wrap justify-content-center mb-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.pequerecetas.com/wp-content/uploads/2019/06/alfajores-de-maicena.jpg" />
                    <Card.Body>
                        <p className="mb-0"  > Alfajores de Coco </p>
                        <Card.Title>$16</Card.Title>
                        <Button className="boton-ver">Agregar</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-12 col-lg-4 d-flex flex-wrap justify-content-center mb-2 ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.pequerecetas.com/wp-content/uploads/2019/06/alfajores-de-maicena.jpg" />
                    <Card.Body>
                        <p className="mb-0"  > Alfajores de Coco </p>
                        <Card.Title>$16</Card.Title>
                        <Button className="boton-ver">Agregar</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-12 col-lg-4 d-flex flex-wrap justify-content-center mb-2 ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.pequerecetas.com/wp-content/uploads/2019/06/alfajores-de-maicena.jpg" />
                    <Card.Body>
                        <p className="mb-0"  > Alfajores de Coco </p>
                        <Card.Title>$16</Card.Title>
                        <Button className="boton-ver">Agregar</Button>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </div>
    )
}



    
     