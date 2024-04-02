import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

import './productDetail.css';

export const ProductDetail = ({ product, cart, setCart, setShowSideCart }) => {

  const history = useHistory();

  const [isInCart, setIsInCart] = useState(false);

  const quantity = 1

  const addToCart = () => {
    setCart((cart) => cart.concat({ product, quantity }));
    setShowSideCart(true);
  };

  const backToShop = () => {
    history.push('/productos');
    window.scrollTo(0, 700);
  }

  useEffect(() => {
    const inCart = cart?.find((productoCart) => productoCart.product._id === product._id);
    if (inCart) {
      setIsInCart(true);
    }
  }, [cart, product]);


  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col className="columna-detalle col-12 col-md-10 col-lg-8 col-xl-6 text-center">
          <p className="mb-0 product-name">{product.name}</p>
          <p className="mb-0">{product.category}</p>
          <p className="mt-2 product-description">{product.description}</p>
          <p className="mt-1 product-price">{product.price} €</p>
          <div className="d-flex justify-content-around">
            <div className="mb-2">
              <button
                disabled={isInCart}
                className={isInCart ? 'added-cart-btn-detail ' : 'add-cart-btn-detail'}
                onClick={addToCart} >
                {isInCart ? (
                  'Añadido al Carrito'
                ) : (
                  'Añadir al Carrito'
                )}
              </button>
            </div>
            <div className="mb-2">
              <button onClick={backToShop} className="back-cart-btn-detail" > 
              <FaArrowLeft/>
              </button>
            </div>
          </div>
        </Col>
        <Col className="card-img-detalle col-12 col-md-10 col-lg-8 col-xl-6 text-center">
          <Card className="card-img-detalle">
            <Card.Img className="img-detalle p-1" variant="top" src={product.imageDetail} />
          </Card>
        </Col>
      </Row>
    </>
  );
};