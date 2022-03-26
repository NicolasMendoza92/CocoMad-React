
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './cardProduct.css';

export const CardProduct = ({ product, cart, setCart, setShowSideCart, favorites, setFavorites }) => {

    const [isInCart, setIsInCart] = useState(false);
    const [isFavorites, setIsFavorites] = useState(false)

    const history = useHistory();

    // Funcion para para productos a favoritos
    const addFavorite = () => {
        setFavorites((favList) => favList.concat({ product }))
    }
    const removeFavorite = () => {
        setFavorites((favList) => favList.filter((fav) => fav.product._id !== product._id));

    };
    const toggleFavorite = () => {
        const isFavored = favorites.some((fav) => fav.product._id === product._id);
        if (isFavored) {
            removeFavorite()
        } else {
            addFavorite()
        }
    }
    useEffect(() => {
        const isFavorites = favorites.some((fav) => fav.product._id === product._id);
        if (isFavorites) {
            setIsFavorites(true);
        } else {
            setIsFavorites(false)
        };
    }, [favorites, product]);

    // funcion para ir al detalle
    const verDetalle = () => {
        history.push(`/detalle/${product._id}`)
        window.scrollTo(0, 100);
    }

    // Funcion para productos al carrito
    const quantity = 1
    const addToCart = () => {
        setCart((cart) => cart.concat({ product, quantity }));
        if (cart.length <= 0) {
            setShowSideCart(true);
        } else
            setShowSideCart(false);
    };

    // logica para cambiar nombre de boton si esta o no agregado al carrito 

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
            <Card onClick={verDetalle} className="card-productos">
                <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                    <Card.Img className="img-product" variant="top" src={product.image} />
                    <div className="overlay">Ver Detalle</div>
                </div>
                <Card.Body className="card-description" >
                    <p className="category-product text-center">
                        {product.category}
                    </p>
                    <p className="mb-1 name-product text-center">
                        {product.name}
                    </p>
                    <p className="price-product text-center">
                        {product.price} €
                    </p>
                </Card.Body>
            </Card>
            <div className="d-flex align-items-center justify-content-center bg-white">
                <button
                    disabled={isInCart}
                    className={isInCart ? 'col-9 added-cart-btn' : 'col-9 add-cart-btn'}
                    onClick={addToCart} >
                    {isInCart ? (
                        'Añadido al Carrito'
                    ) : (
                        'Añadir al Carrito'
                    )}
                </button>
                <button className="col-3 add-fav-btn" onClick={toggleFavorite} >
                    <FaHeart className={isFavorites ? "is-favorite" : "no-favorite"} />
                </button>
            </div >
        </div >
    )
}

