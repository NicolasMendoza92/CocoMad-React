
import React from 'react'
import { Card} from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa';
import './cardProduct.css';

export const CardProduct = ({ product }) => {

    const { image, name, price } = product;

    return (
        <div className="productos mx-1 p-0" >
            <Card className="card-productos">
                <div className="mt-3 d-flex align-items-start justify-content-center">
                    <Card.Img className="img-product" variant="top" src={image} />
                </div>
                <Card.Body className="card-description" >
                    <Card.Title className="name-producto mt-1 text-center">
                        {name}
                    </Card.Title>
                    <Card.Text className="precio-producto mt-2 text-center">
                        {price}
                    </Card.Text>
                    <Card.Text className="text-center">Por unidad</Card.Text>
                </Card.Body>
            </Card>
            <div className="d-flex align-items-center justify-content-center bg-white">
                <button className="add-cart-btn m-1" >
                    Añadir al Carrito
                </button>
                <button className="add-favorite-btn m-1">
                    <FaHeart/>
                </button>
            </div >
        </div>
    )
}

