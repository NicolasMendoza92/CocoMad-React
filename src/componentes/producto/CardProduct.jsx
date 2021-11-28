
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './cardProduct.css';

export const CardProduct = ({ product, cart, setCart }) => {

    const [isInCart, setIsInCart] = useState(false);

    // Funcion para productos al carrito
    const quantity = 1
    const addToCart = () => {
        setCart((cart) => cart.concat({ product, quantity }));
    };

    useEffect(() => {
        const inCart = cart.find((productCart) => productCart.product._id === product._id);
        if (inCart) {
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }
    }, [cart, product]);

    return (
        <div className="productos my-2 mx-1 p-0" >
            <Card as={Link} to={`/productos/${product._id}`}  className="card-productos">
                <div className="mt-1 d-flex align-items-start justify-content-center">
                    <Card.Img className="img-product" variant="top" src={product.image} />
                </div>
                <Card.Body className="card-description" >
                    <p className="name-product text-center">
                        {product.name}
                    </p>
                    <p className="price-product text-center">
                        $ {product.price}
                    </p>
                </Card.Body>
            </Card>
            <div className="d-flex align-items-center justify-content-center m-1 bg-white">
                <button
                    disabled={isInCart}
                    className={isInCart ? 'added-cart-btn' : 'add-cart-btn'}
                    onClick={addToCart} >
                    {isInCart ? (
                        'Añadido al Carrito'
                    ) : (
                        'Añadir al Carrito'
                    )}
                </button>
            </div >
        </div>
    )
}

