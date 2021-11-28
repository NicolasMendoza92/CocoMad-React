import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { BsCart, BsCartFill } from "react-icons/bs";
import { MdOutlineCleaningServices } from "react-icons/md";
import { CartSideModal } from "../cartSide/CartSideModal";

export const CartSideButton = ({ cart, setCart, showSideCart, setShowSideCart }) => {
  const handleClose = () => setShowSideCart(false);
  const handleShow = () => setShowSideCart(true);

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

  const clearCart = () => {
    setCart([]);
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
        <Offcanvas.Header closeButton> <h4 style={{ color: '#b59062' }} >Tu Carrito </h4>  </Offcanvas.Header>
        <Offcanvas.Body className="text-center mt-2">
          {cart.length !== 0 &&
              <button className="clean-cart my-2" onClick={clearCart}><MdOutlineCleaningServices /></button>
          }
          <div className="d-flex flex-column ">
            {mapSideCarrito}
          </div>
          <h2>TOTAL: ${total.toFixed(2)} </h2>
          <button onClick={handleClose} className="btn-general-style" aria-label="Close">CONTINUA COMPRANDO</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}