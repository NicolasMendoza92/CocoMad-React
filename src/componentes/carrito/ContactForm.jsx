
import React, { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import './cartStyles.css';
import { leerDeLocalStorage } from '../../utils/localStorage'
import { SpinnerCM } from '../spinner/SpinnerCM'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../utils/reducer'



export const ContactForm = ({ user, setActiveStep }) => {
    const tokenLocal = leerDeLocalStorage('token') || {};
    const [isLoading, setIsLoading] = useState(false);

    const [{ contactData }, dispatch] = useStateValue();

    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);

    const [input, setInput] = useState({
        buyerEmail: user.email, buyerName: user.name,
        buyerLastName: user.lastName, buyerCelphone: ''
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };

        setInput(newInput);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);

        const buyerData = {
                buyerEmail: input.buyerEmail,
                buyerName: input.buyerName,
                buyerLastName: input.buyerLastName,
                buyerCelphone: input.buyerCelphone,
        };
        dispatch({
            type: actionTypes.SET_CONTACTDATA,
            contactData: buyerData,
        });
        console.log(contactData)

        setActiveStep(1)
        setValidated(true);
    }

   
    if (isLoading) {
        return (
            <SpinnerCM />
        );
    }

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="row row-cols-1">
                    <h3 className="mt-2">Información de contacto</h3>
                </div>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <FloatingLabel controlId="floatingEmail" label="Email">
                        <Form.Control type="email"
                            name="buyerEmail"
                            onChange={(e) => handleChange(e)}
                            defaultValue={tokenLocal.token ? user.email : ""}
                            maxLength="35"
                            required
                        />
                    </FloatingLabel>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom03">
                        <FloatingLabel controlId="floatingName" label="Nombre">
                            <Form.Control type="text"
                                name="buyerName"
                                onChange={(e) => handleChange(e)}
                                defaultValue={tokenLocal.token ? user.name : ""}
                                maxLength="20"
                                required />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                            Necesitamos tu Nombre
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="validationCustom04">
                        <FloatingLabel controlId="floatingLastName" label="Apellido">
                            <Form.Control type="text"
                                name="buyerLastName"
                                onChange={(e) => handleChange(e)}
                                defaultValue={tokenLocal.token ? user.lastName : ""}
                                maxLength="20"
                                required />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                            Necesitamos tu Apellido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="validationCustom16">
                    <FloatingLabel controlId="floatingPhone" label="Teléfono">
                        <Form.Control type="number"
                            name="buyerCelphone"
                            onChange={(e) => handleChange(e)}
                            maxLength="40"
                            required
                        />
                    </FloatingLabel>
                </Form.Group>
                {/* BOTON SUBMIT PARA COMPLETAR EL FORMULARIO*/}
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <button className="boton-comprar" type="submit">
                        Siguiente
                    </button>

                </div>

            </Form>
        </div>
    )
}