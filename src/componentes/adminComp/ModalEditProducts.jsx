import axios from "axios";
import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import swal from "sweetalert";

export default function ModalEditProducts({ showModalEditar, closeModal, productFind, getProducts }) {


    const [input, setInput] = useState({
        name: productFind.name,
        description: productFind.description,
        image: productFind.image,
        category: productFind.category,
        price: productFind.price,
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await axios.put(`http://localhost:4000/api/products/${productFind._id}`, input)
            swal("Producto modificado");
            await getProducts();
            closeModal();
            getProducts();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Modal show={showModalEditar} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="px-3" onSubmit={handleSubmit}>
                        <Form.Group controlId="name" className="mb-3 row">
                            <Form.Label className="col-12 col-md-3">Nombre:</Form.Label>
                            <input
                                className="col-12 col-md-9"
                                name="name"
                                onChange={(e) => handleChange(e)}
                                required
                                type="text"
                                defaultValue={productFind.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 row" controlId="description">
                            <Form.Label className="col-12 col-md-3">Descripcion:</Form.Label>
                            <input
                                className="col-12 col-md-9"
                                name="description"
                                onChange={(e) => handleChange(e)}
                                required
                                type="text"
                                defaultValue={productFind.description}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 row" controlId="image">
                            <Form.Label className="col-12 col-md-3">Imagen:</Form.Label>
                            <input
                                className="col-12 col-md-9"
                                name="image"
                                onChange={(e) => handleChange(e)}
                                required
                                type="text"
                                defaultValue={productFind.image}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 row" controlId="category">
                            <Form.Label className="col-12 col-md-3">Categoria:</Form.Label>
                            <select name="category" onChange={(e) => handleChange(e)} className="col-12 col-md-9" required>
                                <option value="" disabled selected={""}>Categoria...</option>
                                <option value="Alfajores Clasicos">Alfajores Clasicos</option>
                                <option value="Alfajores Premium">Alfajores Premium</option>
                                <option value="Alfajores Grandes">Alfajores Grandes</option>
                                <option value="tartas">Tartas</option>
                                <option value="bizcochos">Bizcochos</option>
                                <option value="salado">Salado</option>
                                <option value="desayunos">Desayunos </option>
                                <option value="boxs">Box Armados</option>
                            </select>
                        </Form.Group>
                        <Form.Group className="mb-3 row" controlId="price">
                            <Form.Label className="col-12 col-md-3">Precio:</Form.Label>
                            <input
                                className="col-12 col-md-9"
                                name="price"
                                onChange={(e) => handleChange(e)}
                                required
                                type="text"
                                defaultValue={productFind.price}
                            />
                        </Form.Group>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="m-auto">
                                <h5 className="text-center m-0 py-2  ">Guardar cambios</h5>
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}