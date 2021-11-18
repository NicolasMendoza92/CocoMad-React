import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FormRegister = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <Form
            noValidate validated={validated}
            className="form-register my-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicName">
                <label className="col-11 col-md-6 text-center">Nombre y Apellido</label>
                <Form.Control
                    className="col-11 col-md-9 "
                    name="name"
                    // onChange={(e) => handleChange(e)}
                    type="text"
                    maxLength="20"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-6 align-items-center text-center">Email</label>
                <Form.Control
                    className="col-11 col-md-9"
                    name="email"
                    // onChange={(e) => handleChange(e)}
                    type="email"
                    maxLength="35"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicPasswprd">
                <label className="col-11 col-md-6 text-center">Contraseña</label>
                <Form.Control
                    className="col-11 col-md-9"
                    name="password"
                    // onChange={(e) => handleChange(e)}
                    type="password"
                    minLength="6"
                    maxLength="15"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicName">
                <label className="col-11 col-md-6 text-center">Conoces CocoMad?</label>
                <Form.Select
                    className="col-11 col-md-9 text-center"
                    name="knowcoco"
                    //  onChange={(e) => handleChange(e)}
                    required>
                    <option value="" disabled selected >Elje una opcion</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                    <option value="ire">No, pero quiero ir!</option>
                </Form.Select>
            </Form.Group>
            <hr />
            <div className="d-flex flex-column align-items-center align-items-md-center justify-content-center">
                <button type="submit" className="boton-artesanal-cel">Registrarme</button>
                <Link className="mt-2 text-decoration-none text-white" to="/login">
                    <b>¿Ya tiene una cuenta? Iniciar sesión</b>
                </Link>
            </div>
        </Form>
    )
}
