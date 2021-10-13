import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './cardProduct.css'; 

export const CardProduct = ({ product }) => {
    const { img, title, price } = product;
    return (
        <div>
            <Col className="col-12 col-lg-4 mx-2 mb-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <p className="mb-0"  > {title} </p>
                        <Card.Title>{price}</Card.Title>
                        <Button className="boton-ver">Agregar al Carrito</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

