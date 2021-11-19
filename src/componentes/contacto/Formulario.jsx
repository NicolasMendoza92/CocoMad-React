import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap'


export const Formulario = () => {
    // Validaciones reactBoot
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
            onSubmit={handleSubmit}
            className="form-contacto my-5"
        >
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="text-center col-11 col-md-3">Nombre </label>
                <Form.Control
                    className="col-11 col-md-9 "
                    type="text"
                    name="senderName"
                    required
                    // onChange={(e) => handleChange(e)}
                    maxLength="30"
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="text-center col-11 col-md-3">Instagram </label>
                <Form.Control
                    className="col-11 col-md-9"
                    type="text"
                    name="senderIg"
                    // onChange={(e) => handleChange(e)}
                    maxLength="30"
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="text-center col-11 col-md-3 align-items-center">Email</label>
                <Form.Control
                    className="col-11 col-md-9 "
                    type="email"
                    name="senderEmail"
                    required
                    // onChange={(e) => handleChange(e)}
                    maxLength="35"
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center ">
                <Form.Control
                    className="col-11 col-md-12"
                    placeholder="Dejanos un mensaje aqui..."
                    as="textarea"
                    name="message"
                    required
                    minLength="15"
                    maxLength="200"
                    rows={3}
                    // onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <hr />
            <div className="d-flex flex-column align-items-center align-items-md-center justify-content-center">
                <button className="boton-artesanal-cel">Contactanos</button>
            </div>
        </Form>
    )
}
