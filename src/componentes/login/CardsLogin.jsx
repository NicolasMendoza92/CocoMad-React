import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export const CardsLogin = () => {
    return (
        <div className="tarjetas">
            <Card
                className="text-center mb-2">
                <Card.Body>
                    <h4> Haz tu pedido por WhatsApp </h4>
                    <Link as={NavLink} to="/register">
                        <button className="boton-artesanal-cel">Quiero pedir por whatsApp</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
