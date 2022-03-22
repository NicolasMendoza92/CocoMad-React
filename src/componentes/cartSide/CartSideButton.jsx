import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { BsCart, BsCartFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { CartSideModal } from "../cartSide/CartSideModal";

export const CartSideButton = ({ cart, setCart, showSideCart, setShowSideCart }) => {
  const handleClose = () => setShowSideCart(false);
  const handleShow = () => setShowSideCart(true);

  const history = useHistory();

  const changeQuantity = (_id, quantity) => {
    const updateCart = cart.map((productCart) => {
        if (productCart.product._id === _id) {
            return { ...productCart, quantity };
        }
        return productCart
    });
    setCart(updateCart);
};

  let total = cart.reduce((total, { product, quantity }) => total + product.price * quantity, 0);

  const mapSideCarrito = cart?.map((productCart, i) => (<CartSideModal 
    key={i} productCart={productCart} 
    cart={cart} setCart={setCart}
    changeQuantity={changeQuantity} />
  ));

  const moveCart = () => {
    history.push('/carrito');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Button className="cart-side-btn" variant="secondary-outline" onClick={handleShow}>
        {
          cart.length > 0 ?
            <>
              < BsCartFill className="cart-side-icon-add"/>
              <span className="swym-header-count-shop">{cart.length}</span>
            </>
            :
            <BsCart className="cart-side-icon"/>
        }
      </Button>
      <Offcanvas
        show={showSideCart}
        onHide={handleClose}
        scroll='true'
      >
        <Offcanvas.Header closeButton> <h4 style={{ color: 'rgb(146, 210, 226)', fontFamily:'Julius Sans One' }} >Tu Carrito </h4>  </Offcanvas.Header>
        <Offcanvas.Body className="text-center mt-2">
          <div className="d-flex flex-column ">
            {mapSideCarrito}
          </div>
          <h3 style={{ color: 'black', fontFamily:'Julius Sans One' }}>SUBTOTAL: {total.toFixed(2)} €</h3>
          <button onClick={handleClose} className="boton-artesanal-cel" aria-label="Close">CONTINUA PIDIENDO</button> <br />
          <button onClick={moveCart} className="boton-artesanal-cel mt-2">IR AL CARRITO</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}