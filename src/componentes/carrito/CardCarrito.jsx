import React from 'react';
import { Card } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md';
import './cartStyles.css';


export const CardCarrito = ({ productCart, cart, setCart, changeQuantity}) => {

  const removeToCart = () => {
    const filterCart = cart.filter((prodCart) => prodCart.product._id !== productCart.product._id);
    setCart(filterCart);
  };

  const oneMore = () => { 
    changeQuantity(productCart.product._id, productCart.quantity + 1);
  };

  const oneLess = () => {
    changeQuantity(productCart.product._id, productCart.quantity - 1);
  };

  const isCartZero = productCart.quantity <= 1;

  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="btn-remove-to-cart pb-1 mb-2" onClick={removeToCart}>
          <MdOutlineClose />
        </button>
      </div>
      <div className="row justify-content-center align-content-center align-items-center">
        <Card.Img className="m-1 col-2 img-cart"
          variant="top"
          src={productCart.product.image}
        />
        <Card.Text className="text-center col-2 mb-0 description-cart" >
          {productCart.product.name} <br />
          <b> {productCart.product.price} €</b>
        </Card.Text>
        <div className="d-flex justify-content-center align-content-center m-2 col-2 botonera-cart">
          <button
            onClick={oneLess}
            disabled={isCartZero}
            className={isCartZero ? 'delete-cartItem-btn' : 'agregar-sacar-btn'}>-</button>
          <h4 className="m-2">{productCart.quantity}</h4>
          <button onClick={oneMore} className="agregar-sacar-btn">+</button>
        </div>
        <Card.Text className="text-center col-2 subtotal-cart">
          <b>{(productCart.product.price * productCart.quantity).toFixed(2)} €</b>
        </Card.Text>
        <hr />
      </div>
    </>
  )
}