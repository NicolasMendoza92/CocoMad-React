
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa';
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
            <Card className="card-productos">
                <div className="mt-3 d-flex align-items-start justify-content-center">
                    <Card.Img className="img-product" variant="top" src={product.image} />
                </div>
                <Card.Body className="card-description" >
                    <Card.Title className="name-product mt-1 text-center">
                        {product.name}
                    </Card.Title>
                    {/* <Card.Title className="descript-product mt-1 text-center">
                        {product.description}
                    </Card.Title> */}
                    <Card.Text className="price-product mt-2 text-center">
                        $ {product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="d-flex align-items-center justify-content-center bg-white">
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
                <button className="add-favorite-btn   m-1">
                    <FaHeart />
                </button>
            </div >
        </div>
    )
}

