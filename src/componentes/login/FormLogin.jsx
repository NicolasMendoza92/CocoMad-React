import React from 'react'
import swal from 'sweetalert'
import { Card, Form } from 'react-bootstrap'
import { FaFacebookSquare } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

export const FormLogin = () => {

    const errorLink = () => {
        swal("Oops!", "Todavia no trabajamos en esto :(", "error");
    }

    return (
        <Card className="form-login">
            <Card.Body>
                <div className="d-flex flex-column align-items-center">
                    <h3><b>Bienvenido a COCOMAD</b> </h3>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label> <b>Email</b></Form.Label>
                        <Form.Control type="email" placeholder="Ingresa el correo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label> <b>Contraseña</b></Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Form>
                <div className="d-flex flex-column">
                    <button onClick={errorLink} type="submit" className="responsive-login-face"> <FaFacebookSquare className="mb-1" /> Iniciar sesión con facebook</button>
                    <div className="d-flex flex-column align-items-center justify-content-center crea-cuenta mt-2">
                        <p className="mb-1 text-black ">¿Aun no tienes cuenta?</p>
                        <Link as={NavLink} to="/register">Create una!</Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}


