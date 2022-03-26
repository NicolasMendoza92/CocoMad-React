import React from 'react'
import { Card } from "react-bootstrap";
import { MdOutlineClose } from 'react-icons/md'
import { useHistory } from 'react-router-dom';


export const CardFavProduct = ({ favProduct, setFavorites, favorites }) => {

    const history = useHistory();

    const removeFavorite = () => {
        const filterFavorite = favorites.filter((fav) => fav.product._id !== favProduct.product._id);
        setFavorites(filterFavorite);
    };

    // funcion para ir al detalle
    const verDetalle = () => {
        history.push(`/detalle/${favProduct.product._id}`)
        window.scrollTo(0, 100);
    }

    return (
        <div>
            <div className="productos mx-3" >
                <div className="d-flex justify-content-end">
                    <button className="btn-remove-to-cart pb-1" onClick={removeFavorite}>
                        <MdOutlineClose />
                    </button>
                </div>
                <Card onClick={verDetalle} className="card-productos">
                    <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                        <Card.Img className="img-product" variant="top" src={favProduct.product.image} />
                        <div className="overlay">Ver Detalle</div>
                    </div>
                    <Card.Body className="card-description" >
                        <p className="category-product text-center">
                            {favProduct.product.category}
                        </p>
                        <p className="mb-1 name-product text-center">
                            {favProduct.product.name}
                        </p>
                        <p className="price-product text-center">
                            {favProduct.product.price} €
                        </p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
