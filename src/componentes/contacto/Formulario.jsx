import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap'
import swal from 'sweetalert';


export const Formulario = () => {
    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({ senderName: '', senderEmail: '', message: '', senderIg: '' });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        if (newInput.senderName.length < 30 && newInput.senderEmail.length < 35 && newInput.senderIg.length < 35 && newInput.message.length < 250) {
            setInput(newInput);
        } else {
            swal('Alcanzaste el numero maximo de caracteres')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://cocobackend.herokuapp.com/api/messages/', input);
            swal({
                title: "Mensaje enviado con exito !",
                icon: "success",
            });
            e.target.reset();
            setInput();
            setValidated(true)
        } catch (error) {
            if (error.response.data) {
                swal(JSON.stringify(error.response.data))
            } else {
                alert('error de conexion')
            }
        }
        setValidated(true);
        if (setValidated === true) {
            e.target.reset();
        }
    }

    return (

        <Form
            noValidate validated={validated}
            onSubmit={handleSubmit}
            className="form-contacto my-2"
        >
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="text-center col-11 col-md-3">Nombre </label>
                <Form.Control
                    className="col-11 col-md-9 "
                    type="text"
                    name="senderName"
                    required
                    onChange={(e) => handleChange(e)}
                    maxLength="30"
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="text-center col-11 col-md-3">Instagram </label>
                <Form.Control
                    className="col-11 col-md-9"
                    type="text"
                    name="senderIg"
                    onChange={(e) => handleChange(e)}
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
                    onChange={(e) => handleChange(e)}
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
                    maxLength="250"
                    rows={3}
                    onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <hr />
            <div className="d-flex flex-column align-items-center align-items-md-center justify-content-center">
                <button className="boton-artesanal-cel">Contactanos</button>
            </div>
        </Form>
    )
}
