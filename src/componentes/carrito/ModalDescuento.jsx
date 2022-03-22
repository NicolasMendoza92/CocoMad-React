import React from 'react'
import { Modal, Table } from 'react-bootstrap'

export const ModalDescuento = ({ showModalDescuento, closeModal }) => {

    return (
        <div>
            <Modal
                show={showModalDescuento}
                onHide={closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'rgb(146, 210, 226)', fontFamily: 'Julius Sans One'}}>Cajas con Descuento</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <p>Si tu pedido, contiene una de las siguientes combinaciones, debes hacer click en "Ajustar" para aplicar descuento.</p>
                    <Table striped bordered hover className='text-center tabla-descuentos'>
                        <thead>
                            <tr>
                                <th>Combo</th>
                                <th>Productos</th>
                                <th>Precio Promocional</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Caja de 6 Clasicos</td>
                                <td>6 Alfajores Clasicos Variados</td>
                                <td>7.50 €</td>
                            </tr>
                            <tr>
                                <td>Caja de 12 Clasicos</td>
                                <td>12 Alfajores Clasicos Variados</td>
                                <td>13.50 € </td>
                            </tr>
                            <tr>
                                <td>Caja de 6 Premium</td>
                                <td>6 Alfajores Premium Variados </td>
                                <td>9.00 €</td>
                            </tr>
                            <tr>
                                <td>Caja de 12 Premium</td>
                                <td>12 Alfajores Premium Variados </td>
                                <td>17.50 €</td>
                            </tr>
                            <tr>
                                <td>Mix de 6</td>
                                <td>3 Alfajores Premium y 3 Alfajores Clasicos </td>
                                <td>8.20 €</td>
                            </tr>
                            <tr>
                                <td>Mix de 12</td>
                                <td>6 Alfajores Premium y 6 Alfajores Clasicos </td>
                                <td>16.00 €</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p className='obs'>Nota: Siempre prevalecera el descuento de la Caja simple sobre la Mixta.</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}