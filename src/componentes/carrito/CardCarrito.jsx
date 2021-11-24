import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md';
import './cartStyles.css';


export const CardCarrito = ({ productCart, cart, setCart, changeQuantity }) => {

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

  const isCartZero = productCart.quantity <= 1 ;

  return (
    <>
      <div className="d-flex justify-content-end">
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={
            (props) => (
              <Tooltip id="button-tooltip" {...props}>
                Eliminar
              </Tooltip>)
          }
        >
          <button className="btn-remove-to-cart pb-1 mb-2" onClick={removeToCart}>
            <MdOutlineClose />
          </button>
        </OverlayTrigger>
      </div>
      <div className="row justify-content-center align-content-center">
        <Card.Img className="m-2 col-12 col-lg-2"
          variant="top"
          style={{ width: '10rem' }}
          src={productCart.product.image}
        />
        <Card.Text className="text-center col-12 col-lg-2" >
          {productCart.product.name}
        </Card.Text>
        <Card.Text className="text-center  col-12 col-lg-2">
         <b> ${productCart.product.price}</b>
        </Card.Text>
        <div className="d-flex justify-content-center align-content-center m-2 col-12 col-lg-2">
             <button
              onClick={oneLess}
              disabled={isCartZero}
              className= {isCartZero ? 'delete-cartItem-btn': 'agregar-sacar-btn'}>-</button> 
          <h4 className="m-2">{productCart.quantity}</h4>
          <button onClick={oneMore} className="agregar-sacar-btn">+</button>
        </div>
        <Card.Text className="text-center col-12 col-lg-2">
        <b>Sub total: ${(productCart.product.price * productCart.quantity).toFixed(2)}</b>
        </Card.Text>
        <hr />
      </div>
    </>
  )
}