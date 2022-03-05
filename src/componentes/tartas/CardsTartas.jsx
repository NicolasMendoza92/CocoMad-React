
import React from 'react'
import { Card } from 'react-bootstrap';
import { CardTarta } from './CardTarta';

export const CardsTartas = ({ tartas, cart, setCart, setShowSideCart}) => {

    const mapTartas = tartas.map((tarta) => (<CardTarta
        key={tarta._id} 
        tarta={tarta}
        cart={cart}
        setCart={setCart} 
        setShowSideCart={setShowSideCart}/>));

    return (
        <>
            {tartas.length !== 0 ?
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-wrap justify-content-center">
                        {mapTartas}
                    </div>
                </div>
                :
                <Card className="no-results-card text-center p-5 m-5">
                    <Card.Title>Producto no encontrado</Card.Title>
                </Card>
            }

        </>
    )
}
