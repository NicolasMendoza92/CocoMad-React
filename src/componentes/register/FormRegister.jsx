import React from 'react'
import swal from 'sweetalert'
import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export const FormRegister = () => {

    // validaciones de reactbootstrap
    const [validated, setValidated] = useState(false);

    const [input, setInput] = useState({ name: '', lastName: '', email: '', password: '', knowcoco: '' });

    const history = useHistory();

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        if (newInput.name.length < 30
            && newInput.lastName.length < 30
            && newInput.email.length < 35
            && newInput.password.length < 15) {
            setInput(newInput);
        } else {
            swal('Alcanzaste el numero maximo de caracteres')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://cocobackend.herokuapp.com/api/auth/register', input);
            swal({
                title: "Excelente!",
                text: "Te has registrado con exito!",
                icon: "success",
                button: "Continua"
            });
            history.push('/login');
        } catch (error) {
            console.error(error);
            if (input.name === '' && input.lastName === '' && input.email === '' && input.password === '') {
                swal("Faltan datos", "Completar los campos obligatorios", "warning")
            }
            else if (input.name === '') {
                swal('completa el nombre')
            }
            else if (input.lastName === '') {
                swal('completa el apellido')
            }
            else if (input.email === '') {
                swal('completa el email')
            }
            else if (input.password === '') {
                swal('completa la contraseña')
            }
            else if (input.knowcoco === '') {
                swal('completa el campo "know Coco"')
            }
            else {
                swal(JSON.stringify(error.response.data));
            }

        }

        setValidated(true);
        if (setValidated === true) {
            e.target.reset();
        }

    };


    return (
        <Form
            noValidate validated={validated}
            className="form-register px-3 my-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicName">
                <label className="col-11 col-md-6 text-center">Nombre </label>
                <Form.Control
                    className="col-11 col-md-9 "
                    name="name"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    maxLength="30"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasiclastName">
                <label className="col-11 col-md-6 text-center">Apellido</label>
                <Form.Control
                    className="col-11 col-md-9 "
                    name="lastName"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    maxLength="30"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-6 align-items-center text-center">Email</label>
                <Form.Control
                    className="col-11 col-md-9"
                    name="email"
                    onChange={(e) => handleChange(e)}
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
                    onChange={(e) => handleChange(e)}
                    type="password"
                    minLength="6"
                    maxLength="15"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicClass">
                <label className="col-11 col-md-6 text-center">Conoces CocoMad?</label>
                <Form.Select
                    className="col-11 col-md-9 text-center"
                    name="knowcoco"
                    onChange={(e) => handleChange(e)}
                    required>
                    <option disabled selected={"Elije una Opcion"}>Elije una opcion</option>
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
