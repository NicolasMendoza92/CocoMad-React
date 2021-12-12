import React from 'react'
import { ListGroup, ListGroupItem, Modal, Table } from 'react-bootstrap'

export const ModalViewSale = ({ showModalViewSale, closeModal, saleFind }) => {

    const { buyerData, buyerShipping, productsList } = saleFind;

    const subTotal = productsList.reduce((total, { producto, quantity }) => total + producto.price * quantity, 0);

    const mapProductsList = productsList.map(({ producto, quantity }, prodList) => (
        <Table size="sm" key={prodList} >
        <thead>
            <tr className="row">
                <td className="col-6">{producto.name}</td>
                <td className="col-3">{quantity} u</td>
                <td className="col-3">${producto.price}</td>
            </tr>
        </thead>
    </Table>
    ))

    return (
        <div>
            <Modal
                size="lg"
                show={showModalViewSale}
                onHide={closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Venta</Modal.Title>
                </Modal.Header>
                <Modal.Body className="row row-cols-2">
                    <div className="d-flex flex-column aling-items-center text-center">
                        <h5> <u>Datos de comprador</u> </h5>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem>{buyerData.buyerName} {buyerData.buyerLastName} </ListGroupItem>
                            <ListGroupItem>{buyerData.buyerEmail}</ListGroupItem>
                        </ListGroup>
                        <hr />
                        <h5> <u>Datos de envio</u> </h5>
                        <ListGroup className="list-group-flush text-start">
                            <ListGroupItem>Dirección: {buyerShipping.buyerAddress1} {buyerShipping.buyerAddress2}</ListGroupItem>
                            <ListGroupItem>Ciudad: {buyerShipping.buyerCity}</ListGroupItem>
                            <ListGroupItem>Provincia: {buyerShipping.buyerState}</ListGroupItem>
                            <ListGroupItem>Codigo Postal: {buyerShipping.buyerZip}</ListGroupItem>
                            {buyerShipping.buyerShippingInstructions &&
                                <ListGroupItem>Instrucciones de envio: {buyerShipping.buyerShippingInstructions}</ListGroupItem>}
                        </ListGroup>
                    </div>
                    <div className="d-flex flex-column bg-datos-compra">
                        <div>
                            <h5 className="text-center"> <u>Datos de compra</u> </h5>
                            <div className="overflow-compra" >
                                {mapProductsList}
                            </div>
                            <div className="m-2 d-flex justify-content-around pt-3 border-subtotal-total">
                                <h5>SubTotal:</h5>
                                <h5>${subTotal.toFixed(2)}</h5>
                            </div>
                            <div className="m-2 d-flex justify-content-around">
                                <h5>Envio:</h5>
                                <h5> $5 </h5>
                            </div>
                            <div className="m-2 d-flex justify-content-around pt-5 border-subtotal-total">
                                <h3>Total $ </h3>
                                <h3>{subTotal.toFixed(2) + 5}</h3>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
