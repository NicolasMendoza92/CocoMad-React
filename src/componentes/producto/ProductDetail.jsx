import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './productDetail.css';

export const ProductDetail = ({ product, cart, setCart }) => {


  const [isInCart, setIsInCart] = useState(false);

  const quantity = 1

  const addToCart = () => {
    setCart((cart) => cart.concat({ product, quantity}));
  };

  useEffect(() => {
    const inCart = cart?.find((productoCart) => productoCart.product._id === product._id);
    if (inCart) {
      setIsInCart(true);
    }
  }, [cart, product]);

  return (
    <Container>
      <Row className="details-product-bg" style={{
        backgroundImage: `url(${product.imageDetail})`
      }}>
        <Col className="columna-detalle col-12 col-md-10 col-lg-8 col-xl-5 text-center">
            <span className="product-name">{product.name}</span>
            <h2 className="mt-3 product-description">{product.description}</h2>
          <p className="mt-1 product-price ">${product.price} POR UNIDAD</p>
          <div className="mb-2">
          <button
              disabled={isInCart}
              className={isInCart ? 'col-9 added-cart-btn-detail ' : ' col-9 add-cart-btn-detail'}
              onClick={addToCart} >
              {isInCart ? (
                'Añadido al Carrito'
              ) : (
                'Añadir al Carrito'
              )}
          </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};