import React from 'react'
import { Card } from 'react-bootstrap'


export const CardDataCompra = ({ productCart }) => {

    return (
        <div className="row align-items-center justify-content-around">
            <div className="col-4 m-1 text-center position-relative">
            <Card.Img className="img-buy-data" src={productCart.product.image} />
            <span className="swym-count-data-buy">{productCart.quantity}</span>
            </div>
            <div className="col-4 p-0 m-1  text-center ">
                <span className="text-center m-1 ">{productCart.product.name}</span> <br />
                <span className="text-center p-0 m-2">$ {(productCart.product.price * productCart.quantity).toFixed(2)}</span>
            </div>
            
        </div>
    )
}