import React from 'react'
import { useState } from 'react';
import { ListGroup, ListGroupItem, Modal, Table } from 'react-bootstrap'
import { BsFillCalculatorFill } from 'react-icons/bs';

export const ModalViewSale = ({ showModalViewSale, closeModal, saleFind }) => {

    const { buyerData, productsList, buyerConditions, buyerShipping } = saleFind;

    const [send, setSend] = useState();

    const subTotal = productsList.reduce((total, { producto, quantity }) => total + producto.price * quantity, 0);
    const total = send + subTotal

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

    const calcularEnvio = () => {

        if (buyerShipping.buyerZip === "28040" || buyerShipping.buyerZip === "28003" || buyerShipping.buyerZip === "28004" || buyerShipping.buyerZip === "28005" || buyerShipping.buyerZip === "28008"
            || buyerShipping.buyerZip === "28010" || buyerShipping.buyerZip === "28011" || buyerShipping.buyerZip === "28012" || buyerShipping.buyerZip === "28013" || buyerShipping.buyerZip === "28014"
            || buyerShipping.buyerZip === "28015") {
            setSend(8.40);
        } else if (buyerShipping.buyerZip === "28001" || buyerShipping.buyerZip === "28002" || buyerShipping.buyerZip === "28006" || buyerShipping.buyerZip === "28007" || buyerShipping.buyerZip === "28009"
            || buyerShipping.buyerZip === "28019" || buyerShipping.buyerZip === "28020" || buyerShipping.buyerZip === "28027" || buyerShipping.buyerZip === "28028" || buyerShipping.buyerZip === "28039"
            || buyerShipping.buyerZip === "28045") {
            setSend(11.40);
        } else if (buyerShipping.buyerZip === "28016" || buyerShipping.buyerZip === "28017" || buyerShipping.buyerZip === "28018" || buyerShipping.buyerZip === "28023" || buyerShipping.buyerZip === "28025"
            || buyerShipping.buyerZip === "28026" || buyerShipping.buyerZip === "28030" || buyerShipping.buyerZip === "28031" || buyerShipping.buyerZip === "28036" || buyerShipping.buyerZip === "28038"
            || buyerShipping.buyerZip === "28041" || buyerShipping.buyerZip === "28043" || buyerShipping.buyerZip === "28047" || buyerShipping.buyerZip === "28053") {
            setSend(13.40);
        } else if (buyerShipping.buyerZip === "28021" || buyerShipping.buyerZip === "28022" || buyerShipping.buyerZip === "28024" || buyerShipping.buyerZip === "28029" || buyerShipping.buyerZip === "28032"
            || buyerShipping.buyerZip === "28033" || buyerShipping.buyerZip === "280304" || buyerShipping.buyerZip === "28035" || buyerShipping.buyerZip === "28037" || buyerShipping.buyerZip === "28044"
            || buyerShipping.buyerZip === "28046" || buyerShipping.buyerZip === "28050" || buyerShipping.buyerZip === "28054" || buyerShipping.buyerZip === "28055") {
            setSend(14.20)
        }
        else (
            setSend(15.40)
        )
    }



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
                            <ListGroupItem>Retira del Local:  {buyerConditions.pickUp}</ListGroupItem>
                            <ListGroupItem>Dia de Envio:{new Date(buyerConditions.deliveryDate).getUTCDate()}/{new Date(buyerConditions.deliveryDate).getUTCMonth() + 1}/{new Date(buyerConditions.deliveryDate).getUTCFullYear()}</ListGroupItem>
                            <ListGroupItem>Metodo de Pago:  {buyerConditions.payMethod}</ListGroupItem>
                        </ListGroup>
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
                                <h5>{subTotal.toFixed(2)} €</h5>
                            </div>
                            <div className="m-2 d-flex justify-content-around">
                                <h5>Envio:</h5>
                                <button onClick={calcularEnvio}>  <BsFillCalculatorFill /> </button> <h5> {send}</h5>
                            </div>
                            <div className="m-2 d-flex justify-content-around pt-5 border-subtotal-total">
                                <h3>Total: </h3>
                                <h3>{total.toFixed(2)} €</h3>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
