import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { ModalAlfajores } from "./ModalAlfajores";
import './productDetail.css';

export const ProductsBoxs = () => {

    const [showModalAlfajores, setShowModalAlfajores] = useState(false);

    const handleCloseModalAlfajores = () => setShowModalAlfajores(false);
    const handleShowModalAlfajores = () => setShowModalAlfajores(true);

    return (
        <>
            <div>
                <h3 className="text-center box-header d-flex justify-content-center align-items-center">ARMA TU CAJA CON TUS SABORES PREFERIDOS</h3>
            </div>
            <div className=" my-2 mx-1 p-0 d-flex flex-wrap justify-content-around" >
                <Card onClick={handleShowModalAlfajores} className="card-productos m-2">
                    <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                        <Card.Img className="img-product" variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637682094/cocoMAD/_MG_5488_fnwcaa.png" />
                        <div className="overlay">VER SABORES</div>
                    </div>
                    <Card.Body className="card-description" >
                        <p className="category-product text-center">
                            CAJA DE ALFAJORES
                        </p>
                        <p className="name-product text-center">
                            Clasicos y Premiums
                        </p>
                    </Card.Body>
                </Card>

                <Card  className="card-productos m-2">
                    <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                    <Card.Img className="img-product" variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1641211769/cocoMAD/empanadas_2_ssfbik.png" />
                        <div className="overlay">VER SABORES</div>
                    </div>
                    <Card.Body className="card-description" >
                        <p className="category-product text-center">
                            EMPANADAS TUCUMANAS
                        </p>
                        <p className="name-product text-center">
                            Consultar Sabores
                        </p>
                    </Card.Body>
                </Card>
            </div>

            <ModalAlfajores
                handleCloseModalAlfajores={handleCloseModalAlfajores}
                showModalAlfajores={showModalAlfajores} />
        </>
    )
}
