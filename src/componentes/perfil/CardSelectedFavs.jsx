import React from 'react'
import { Card } from 'react-bootstrap'

export const CardSelectedFavs = ({favProduct}) => {
  return (
    <div>
            <div className="productos mx-3" >
                <Card className="card-productos">
                    <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                        <Card.Img className="img-product" variant="top" src={favProduct.product.image} />
                    </div>
                    <Card.Body className="card-description" >
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
