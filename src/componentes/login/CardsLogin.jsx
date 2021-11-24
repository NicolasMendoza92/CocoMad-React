import React from 'react'
import { Card } from 'react-bootstrap'

export const CardsLogin = () => {
    return (
        <div className="tarjetas">
            <Card
                className="text-center mb-2">
                <Card.Body>
                    <h4> Haz tu pedido por WhatsApp </h4>
                    <a href="https://wa.me/c/34635790277" target="blank" >
                        <button className="boton-artesanal-cel">Quiero pedir por whatsApp</button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}
