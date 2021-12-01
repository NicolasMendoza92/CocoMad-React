
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './cardProduct.css';

export const CardProduct = ({ product, cart, setCart, setShowSideCart }) => {

    const [isInCart, setIsInCart] = useState(false);

    // Funcion para productos al carrito
    const quantity = 1
    const addToCart = () => {
        setCart((cart) => cart.concat({ product, quantity }));
        setShowSideCart(true);
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
            <Card as={Link} to={`/detalle/${product._id}`} className="card-productos">
                <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                    <Card.Img className="img-product" variant="top" src={product.image} />
                    <div class="overlay">Ver Detalle</div>
                </div>
                <Card.Body className="card-description" >
                    <p className="category-product text-center">
                        {product.category}
                    </p>
                    <p className="name-product text-center">
                        {product.name}
                    </p>
                    <p className="price-product text-center">
                        $ {product.price}
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

