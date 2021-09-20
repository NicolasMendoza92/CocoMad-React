
import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'

export const Producto = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.pequerecetas.com/wp-content/uploads/2019/06/alfajores-de-maicena.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}