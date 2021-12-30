import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'

export const ModalCantSab = ({ handleCloseModal, showModal }) => {

    const [input, setInput] = useState({
        saborEmpa: '',
        cantidad: '',
        saborAlfa:'',
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        // try {
        //   await axios.put(`https://cocobackend.herokuapp.com/api/products/${productFind._id}`, input)
        //   swal("Producto modificado");
        //   await getProducts();
        //   closeModal();
        // } catch (error) {
        //   console.error(error);
        // }
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
                    <Form onSubmit={handleSubmit}>
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
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Cantidad" max="12" min="0" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    )
}
