import React from 'react'
import { Card } from 'react-bootstrap'
import swal from 'sweetalert';
import './productDetail.css';
// import { ModalAlfajores } from "./ModalAlfajores";


export const ProductsBoxs = () => {

    // const [showModalAlfajores, setShowModalAlfajores] = useState(false);

    // const handleCloseModalAlfajores = () => setShowModalAlfajores(false);
    // const handleShowModalAlfajores = () => setShowModalAlfajores(true);

    const whatsApp = async () => {
        swal("Perfecto, vamos a coordinar tu pedido por WhatsApp.")
        .then((value) => {
            const newWindow = window.open('https://wa.me/c/34635790277');
            if (newWindow) newWindow.opener = null
        });
        
    }

    const moveToWhatsApp = () => {
        swal({
            title: "Coordinaras el pedido por WhatsApp... ¿Estas de acuerdo?",
            text: "Para armar cajas especiales debes quedar de acuerdo por otro medio, ya que son muy especificas",
            icon: "warning",
            buttons: true,
            succesMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    whatsApp();
                } else {
                    swal("Excelente! Continua navegando en nuestro Shop Online");
                }
            });
    }

    return (
        <>
            <div>
                <h3 className="text-center box-header d-flex justify-content-center align-items-center">ARMA TU CAJA CON TUS SABORES PREFERIDOS</h3>
            </div>
            <div className=" my-2 mx-1 p-0 d-flex flex-wrap justify-content-around" >
                <Card onClick={moveToWhatsApp} className="card-productos m-2">
                    <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                        <Card.Img className="img-product" variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637682094/cocoMAD/_MG_5488_fnwcaa.png" />
                        <div className="overlay">ARMA CAJA ESPECIAL</div>
                    </div>
                    <Card.Body className="card-description" >
                        <p className="category-product text-center">
                            CAJA ESPECIAL 
                        </p>
                        <p className="name-product text-center">
                            Consultar Sabores
                        </p>
                    </Card.Body>
                </Card>

                <Card onClick={moveToWhatsApp} className="card-productos m-2">
                    <div className="mt-1 d-flex align-items-start justify-content-center container-photo">
                        <Card.Img className="img-product" variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1641211769/cocoMAD/empanadas_2_ssfbik.png" />
                        <div className="overlay">PEDIR EMPANADAS</div>
                    </div>
                    <Card.Body className="card-description" >
                        <p className="category-product text-center">
                            "LA ZAMBITA"
                        </p>
                        <p className="name-product text-center">
                            EMPANADAS TUCUMANAS
                        </p>
                        <p className="name-product text-center">
                            Consultar Sabores
                        </p>
                    </Card.Body>
                </Card>
            </div>

            {/* <ModalAlfajores
                handleCloseModalAlfajores={handleCloseModalAlfajores}
                showModalAlfajores={showModalAlfajores} /> */}
        </>
    )
}
