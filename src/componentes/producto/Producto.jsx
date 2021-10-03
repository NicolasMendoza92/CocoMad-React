
import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card, Col } from 'react-bootstrap'

export const Producto = () => {
    return (
        <div>
            <Col className="col-12 col-lg-4 d-flex flex-wrap justify-content-between ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.pequerecetas.com/wp-content/uploads/2019/06/alfajores-de-maicena.jpg" />
                    <Card.Body>
                        <p className="mb-0"> Alfajores Clasicos </p>
                        <p className="mb-0"  > Alfajores de Coco </p>
                        <Card.Title>$16</Card.Title>
                        <Button variant="primary">Ver</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}