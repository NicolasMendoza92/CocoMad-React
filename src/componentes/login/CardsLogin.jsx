import React from 'react'
import { Card } from 'react-bootstrap'
import { FaWhatsappSquare } from 'react-icons/fa'

export const CardsLogin = () => {
    return (
        <div>
            <Card
                className="text-center mb-2">
                <Card.Body className="tarjeta-login">
                    <h4> Haz tu pedido por WhatsApp </h4>
                    <a href="https://wa.me/c/34635790277" target="blank" >
                     <FaWhatsappSquare className="responsive-login-whatsapp"/>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}
