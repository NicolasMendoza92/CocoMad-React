import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ModalCantSab } from "./ModalCantSab";
import './productDetail.css';

export const ProductDetail = ({ product, cart, setCart }) => {

  const history = useHistory();

  const [isInCart, setIsInCart] = useState(false);

  const quantity = 1

  const addToCart = () => {
    setCart((cart) => cart.concat({ product, quantity }));
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

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


  return (
    <>
      <Row className="details-product-bg" style={{
        backgroundImage: `url(${product.imageDetail})`
      }}>
        <Col className="columna-detalle col-11 col-md-10 col-lg-8 col-xl-5 text-center">
          <span className="product-name">{product.name}</span>
          <h2 className="mt-3 product-description">{product.description}</h2>
          {(product.category === "Alfajores Clasicos" || product.category === "Alfajores Premium") &&
            <>
              <Button variant="primary" onClick={handleShowModal}>
                Elija Sabores y Cantidades
              </Button>
            </>
          }
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
          <div className="mb-2">
            <button onClick={backToShop} className="add-cart-btn-detail" > Volver a Productos</button>
          </div>
        </Col>
      </Row>
      <ModalCantSab 
       handleCloseModal={handleCloseModal}
       showModal={showModal} />
    </>
  );
};