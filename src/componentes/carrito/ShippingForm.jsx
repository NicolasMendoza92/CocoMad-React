
import React, { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import './cartStyles.css';
import { SpinnerCM } from '../spinner/SpinnerCM'
import { ZipCode } from './ZipCode'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../utils/reducer'
import axios from 'axios';




export const ShippingForm = ({ cart, setEnvio, envio, ajuste, setActiveStep, pickUpLocal }) => {

    const [isLoading, setIsLoading] = useState(false);

    const [{ shippingData }, dispatch] = useStateValue();

    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);


    const [input, setInput] = useState({
        buyerAddress1: '', buyerAddress2: '', buyerCity: '', buyerState: '', buyerZip: '',
        buyerShippingInstructions: '', deliveryDate: '', deliveryHour: '',
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
        try {
            const newShipping = {
                deliveryDate: input.deliveryDate,
                deliveryHour: input.deliveryHour,
                pickUp: pickUpLocal,
                discount: ajuste,
                sendPrice: envio,
                buyerAddress1: input.buyerAddress1,
                buyerAddress2: input.buyerAddress2,
                buyerCity: input.buyerCity,
                buyerState: input.buyerState,
                buyerZip: input.buyerZip,
                buyerShippingIntructions: input.buyerShippingInstructions,
                productsList: cart.map((cartItem) => ({ productId: cartItem.product._id, quantity: cartItem.quantity }))
            }
            const newPickUp = {
                deliveryDate: input.deliveryDate,
                deliveryHour: input.deliveryHour,
                pickUp: pickUpLocal,
                discount: ajuste,
                productsList: cart.map((cartItem) => ({ productId: cartItem.product._id, quantity: cartItem.quantity }))
            }
            if (pickUpLocal === "no") {
                await axios.post('http://localhost:4000/api/shipment/', newShipping);
                console.log(newShipping)
                dispatch({
                    type: actionTypes.SET_SHIPPINGDATA,
                    shippingData: newShipping,
                });
                console.log(shippingData);
                setActiveStep(2)
            }
            else if (pickUpLocal === "si") {
                await axios.post('http://localhost:4000/api/pickUp/', newPickUp);
                console.log(newPickUp)
                dispatch({
                    type: actionTypes.SET_SHIPPINGDATA,
                    shippingData: newPickUp,
                });
                console.log(shippingData);
                setActiveStep(2)
            }


        } catch (error) {
            console.error(error);
            alert('error de conexion')
        }

        setValidated(true);
        if (setValidated === true) {
            e.target.reset();
        }
        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <SpinnerCM />
        );
    }

    return (
        <div>
            {pickUpLocal === "si" &&
                <>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <h4 className="mt-2">Fecha de retiro</h4>
                            <Form.Text className="text-muted">
                                Haz tu pedido con 48 horas de anticipacion <b>¡Domingos No Entregamos!</b>
                            </Form.Text>
                            <Form.Control
                                type="date"
                                name="deliveryDate"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Debes pedir con 2 dias de anticipación
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom22">
                            <h4 className="mt-2">Rango horario</h4>
                            <Form.Select
                                className="col-11 col-md-9 text-center"
                                name="deliveryHour"
                                onChange={(e) => handleChange(e)}
                                defaultValue={'default'}
                                required>
                                <option value="default" disabled>Elige una opción</option>
                                <option value="9am a 11am">9:00 am - 11:00 am</option>
                                <option value="11am a 13pm">11:00 am - 13:00 pm</option>
                                <option value="17pm a 18pm">17:00 pm - 18:30 pm</option>
                                <option value="18pm a 20pm">18:30 pm - 20:00 pm</option>
                            </Form.Select>
                        </Form.Group>
                        {/* BOTON SUBMIT PARA COMPLETAR EL FORMULARIO*/}
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <button className="boton-comprar" type="submit">
                                Ir al Pago
                            </button>
                        </div>
                    </Form>
                </>
            }
            {pickUpLocal === "no" &&
                <>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <h4 className="mt-2">Fecha de retiro</h4>
                            <Form.Text className="text-muted">
                                Haz tu pedido con 48 horas de anticipacion <b>¡Domingos No Entregamos!</b>
                            </Form.Text>
                            <Form.Control
                                type="date"
                                name="deliveryDate"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Debes pedir con 2 dias de anticipación
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom22">
                            <h4 className="mt-2">Rango horario</h4>
                            <Form.Select
                                className="col-11 col-md-9 text-center"
                                name="deliveryHour"
                                onChange={(e) => handleChange(e)}
                                defaultValue={'default'}
                                required>
                                <option value="default" disabled>Elige una opción</option>
                                <option value="9am a 11am">9:00 am - 11:00 am</option>
                                <option value="11am a 13pm">11:00 am - 13:00 pm</option>
                                <option value="17pm a 18pm">17:00 pm - 18:30 pm</option>
                                <option value="18pm a 20pm">18:30 pm - 20:00 pm</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <ZipCode setEnvio={setEnvio} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom05">
                            <FloatingLabel controlId="floatingAddress1" label="Dirección...Calle,Paseo...">
                                <Form.Control type="text"
                                    name="buyerAddress1"
                                    onChange={(e) => handleChange(e)}
                                    maxLength="40"
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">
                                Dato Requerido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom06">
                            <FloatingLabel controlId="floatingAddress2" label="Piso, Puerta ...">
                                <Form.Control type="text"
                                    name="buyerAddress2"
                                    onChange={(e) => handleChange(e)}
                                    maxLength="40" />

                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">
                                Dato Requerido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <FloatingLabel controlId="floatingCity" label="Ciudad">
                                    <Form.Control type="text"
                                        name="buyerCity"
                                        onChange={(e) => handleChange(e)}
                                        maxLength="20"
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">
                                    Dato Requerido
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <FloatingLabel controlId="floatingState" label="Provincia">
                                    <Form.Control type="text"
                                        name="buyerState"
                                        onChange={(e) => handleChange(e)}
                                        maxLength="20"
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">
                                    Dato Requerido
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <FloatingLabel controlId="floatingZip" label="Codigo Postal">
                                    <Form.Control type="number"
                                        maxLength="8"
                                        minLength="5"
                                        name="buyerZip"
                                        onChange={(e) => handleChange(e)}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">
                                    Dato Requerido
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mt-2 mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Instrucciones de entrega</Form.Label>
                            <Form.Control as="textarea"
                                maxLength="80"
                                name="buyerShippingInstructions"
                                onChange={(e) => handleChange(e)}
                                rows={3} />
                        </Form.Group>
                        {/* BOTON SUBMIT PARA COMPLETAR EL FORMULARIO*/}
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <button className="boton-comprar" type="submit">
                                Ir al Pago
                            </button>
                        </div>
                    </Form>
                </>
            }

        </div>
    )
}
