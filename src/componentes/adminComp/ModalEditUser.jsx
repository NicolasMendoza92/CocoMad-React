import axios from 'axios';
import swal from 'sweetalert'
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'

export const ModalEditUser = ({ showModalEditar, closeModal, userFind, getUsers}) => {

    const [input, setInput] = useState({ role: userFind.role });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await axios.put(`https://cocobackend.herokuapp.com/api/users/${userFind._id}`, input)
            swal("Cambio exitoso", `El usuario ahora es ${userFind.role === 'admin' ? 'Cliente' : 'Administrador'}`, "success");
            closeModal();
            getUsers();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Modal
                show={showModalEditar}
                onHide={closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="px-3" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 row align-items-center justify-content-start" >
                            <p>Nombre: {userFind.name}</p>
                            <p>Apellido: {userFind.lastName}</p>
                            <p>Conoce CocoMad: {userFind.knowcoco}</p>
                            <p>Este usuario es: {userFind.role}</p>
                            <label className="col-11 col-md-3 align-items-center">Cambiar:</label>
                            <select name="role" onChange={(e) => handleChange(e)} className="col-11 col-md-9" defaultValue={'default'} required>
                                <option value="default" disabled  >Elje un rol</option>
                                <option value="user">Cliente</option>
                                <option value="admin">Administrador</option>
                            </select>
                        </Form.Group>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="m-auto" >
                                <h5 className="text-center m-0 py-2  ">Guardar cambios</h5>
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}