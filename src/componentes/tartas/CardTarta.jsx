
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

export const CardTarta = ({ tarta, cart, setCart, setShowSideCart }) => {

    const [isInCart, setIsInCart] = useState(false);

    const history = useHistory();

    // funcion para ir al detalle
    const verDetalle = () => {
        history.push(`/detalle/${tarta._id}`)
        window.scrollTo(0, 100);
    }

    // Funcion para productos al carrito
    const quantity = 1
    const addToCart = () => {
        setCart((cart) => cart.concat({ tarta, quantity }));
        setShowSideCart(true);
    };

    useEffect(() => {
        const inCart = cart.find((tartaCart) => tartaCart.tarta._id === tarta._id);
        if (inCart) {
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }
    }, [cart, tarta]);

    return (
        <div className="productos my-2 mx-1 p-0" >
            <Card onClick={verDetalle}  className="card-productos">
                <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                    <Card.Img className="img-product" variant="top" src={tarta.image} />
                    <div className="overlay">Ver Detalle</div>
                </div>
                <Card.Body className="card-description" >
                    <p className="category-product text-center">
                        {tarta.category}
                    </p>
                    <p className="mb-1 name-product text-center">
                        {tarta.name}
                    </p>
                    <p className="price-product text-center">
                        {tarta.price} €
                    </p>
                </Card.Body>
            </Card>
            <div className="d-flex align-items-center justify-content-center">
                <button
                    disabled={isInCart}
                    className={isInCart ? 'added-cart-btn' : 'add-cart-btn'}
                    onClick={addToCart} >
                    {isInCart ? (
                        'Agregado al Carrito'
                    ) : (
                        'Agregar al Carrito'
                    )}
                </button>
            </div >
        </div>
    )
}
