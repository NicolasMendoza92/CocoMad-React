import React from 'react'
import { Card } from 'react-bootstrap'


export const CardDataCompra = ({ productCart }) => {

    return (
        <div className="row align-items-center justify-content-around">
            <div className="col-4 text-center position-relative prod-data-list">
            <Card.Img className="img-buy-data" src={productCart.product.image} />
            <span className="swym-count-data-buy">{productCart.quantity}</span>
            </div>
            <div className="col-4 text-center ">
                <span className="text-center name-buy-data ">{productCart.product.name}</span> <br />
                <span className="text-center cant-buy-data"> {(productCart.product.price * productCart.quantity).toFixed(2)} €</span>
            </div>
            
        </div>
    )
}