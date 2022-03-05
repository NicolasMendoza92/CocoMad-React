import React from 'react'
import swal from 'sweetalert'
import axios from 'axios';
import { Card, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { guardarEnLocalStorage } from '../../utils/localStorage';

export const FormLogin = ({requestUserData, cart}) => {

    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);

    const [input, setInput] = useState({ email: '', password: '' });
    const history = useHistory();

    const scrollToTop = () => {
        window.scrollTo(0, 400);
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        if (newInput.email.length < 35
            && newInput.password.length < 15) {
            setInput(newInput);
        } else {
            swal('Alcanzaste el numero maximo de caracteres')
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', input);
            const { token, name } = response.data;
            guardarEnLocalStorage({ key: 'token', value: { token } });
            if (cart.length !== 0) {
                swal('Genial ' + name + ' estas listo para comprar');
            } else {
                swal('Bienvenido al Mundo CocoMad ' + name);
            }
            await requestUserData(); 
            //El push redirecciona a la pantalla indicada en el parametro.
            if (cart.length !== 0) {
                history.push('/carrito');
                scrollToTop();
            } else {
                history.push('/');
            }
        } 
        catch (error) {
            console.error(error);
            if (input.email === '' && input.password === '') {
                swal("Faltan datos", "Completar los campos obligatorios", "warning")
            }
            else if (input.email === '') {
                swal('completa el email')
            }
            else if (input.password === '') {
                swal('completa la contraseña')
            }
            else if (error.response.data) {
                swal("Datos Incorrectos", "Asegurate de tener los permisos", "warning")
                // swal({
                //     title: "Datos Incorrectos / Usuario No Registrado",
                //     text: (error.response.data),
                //     icon: "error",
                //     buttons: ["No, Gracias", "Registrate!"],
                //     dangerMode: true,
                // })
                //     .then((willDelete) => {
                //         if (willDelete) {
                //             history.push('/register')
                //         } else {
                //             swal("Sera en otra Ocacion!");
                //         }
                //     });
            } else {
                alert('Error de conexion');
            }
        }
        setValidated(true);
        if (setValidated === true) {
            event.target.reset();
        }

    };

    return (
        <Card className="form-login">
            <Card.Body className="card-login-form">
                <div className="d-flex flex-column align-items-center">
                    <h3><b>Bienvenido a COCOMAD</b> </h3>
                </div>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className="text-center">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label> <b>Email</b></Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Ingresa el correo"
                            onChange={(e) => handleChange(e)}
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label> <b>Contraseña</b></Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => handleChange(e)}
                            required />
                    </Form.Group>
                    <button type="submit" className="responsive-login-btn">Iniciar Sesion</button>
                </Form>
                {/* <div className="d-flex flex-column">
                    <div className="d-flex flex-column align-items-center justify-content-center crea-cuenta mt-2">
                        <p className="mb-1 text-black ">¿Aun no tienes cuenta?</p>
                        <Link as={NavLink} to="/register">Create una!</Link>
                    </div>
                </div> */}
            </Card.Body>
        </Card >
    )
}


