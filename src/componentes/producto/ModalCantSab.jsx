import React from 'react'
import { useState } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap'

export const ModalCantSab = ({ handleCloseModal, showModal }) => {

    const [detallesProducto, setDetallesProducto] = useState('');

    const [input, setInput] = useState({
        saborEmpa: '',
        cantidad: '',
        saborAlfa: '',
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
        console.log(newInput)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDetallesProducto('');
        handleCloseModal();
    }
    return (
        <div>
            <Modal
                size="lg"
                show={showModal}
                onHide={handleCloseModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Venta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-wrap'>
                    <Form.Group className="d-flex flex-column mb-3 mx-1" controlId="formPlaintextPassword">
                        <Form.Label >
                            Maizena
                        </Form.Label>
                        <Col >
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column mb-3 mx-1" controlId="formPlaintextPassword">
                        <Form.Label>
                            Cookies
                        </Form.Label>
                        <Col >
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column mb-3 mx-1" controlId="formPlaintextPassword">
                        <Form.Label >
                            Avena
                        </Form.Label>
                        <Col>
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    <Form.Group  className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                        <Form.Label >
                            Coco
                        </Form.Label>
                        <Col >
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                        <Form.Label >
                            Nuez
                        </Form.Label>
                        <Col >
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                        <Form.Label >
                            Cacao Amargo y Nueces
                        </Form.Label>
                        <Col >
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    <Form.Group  className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                        <Form.Label >
                            Avellana
                        </Form.Label>
                        <Col>
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    <Form.Group  className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                        <Form.Label >
                            Cafe
                        </Form.Label>
                        <Col>
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    <Form.Group  className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                        <Form.Label >
                        Peanut Butter
                        </Form.Label>
                        <Col>
                        <Form.Control name="cantidad" type="number" placeholder="Cantidad" max="12" min="0" onChange={(e) => handleChange(e)} required />
                        </Col>
                    </Form.Group>
                    </div>
       
                    <Form onSubmit={handleSubmit}>
                        {/* 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <select name="saborEmpa" className="col-12 col-md-9" onChange={(e) => handleChange(e)} required>
                                <option value="" disabled selected={"Sabor..."}>Sabor...</option>
                                <option value="carne">Carne</option>
                                <option value="pollo">Pollo</option>
                                <option value="cebolla caramelizada y QC">Cebolla caramelizada y Queso de cabra</option>
                                <option value="puerro y provolone">Puerro y Provolone</option>
                                <option value="capresse">Capresse</option>
                                <option value="humita">Humita</option>
                                <option value="jamon y queso">Jamon y Queso</option>
                            </select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <select name="saborAlfa" className="col-12 col-md-9" onChange={(e) => handleChange(e)} required>
                                <option value="" disabled selected={"Sabor..."}>Sabor...</option>
                                <option value="maizena">Maizena</option>
                                <option value="cookies">Cookies</option>
                                <option value="avena">Avena</option>
                                <option value="coco">Coco</option>
                                <option value="nuez">Nuez</option>
                                <option value="cacao cmargo y nuez">Cacao Amargo y Nuez</option>
                                <option value="desayunos">Peanut Butter</option>
                                <option value="cafe">Cafe</option>
                                <option value="avellana">Avellana</option>
                                <option value="bañado pequeño">Bañado pequeño</option>
                            </select>
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    )
}
