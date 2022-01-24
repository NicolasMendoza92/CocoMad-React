import axios from 'axios'
import React, { useState } from 'react'
import { Accordion, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { FaWhatsappSquare } from 'react-icons/fa'
import swal from 'sweetalert'
import { leerDeLocalStorage } from '../../utils/localStorage'
import { ZipCode } from './ZipCode'


export const BuyForm = ({ user, cart, setEnvio, envio, ajuste}) => {

    const tokenLocal = leerDeLocalStorage('token') || {};

    const [pickUpLocal, setPickUpLocal] = useState('');
    const [payment, setPayment] = useState('');

    // Formula para editar el datepicker
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 3).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);

    const [input, setInput] = useState({
        buyerEmail: user.email, buyerName: user.name,
        buyerLastName: user.lastName, buyerCelphone: '', buyerAddress1: '', buyerAddress2: '', buyerCity: '',
        buyerState: '', buyerZip: '', deliveryDate: '', deliveryHour: '', pickUp: '', buyerShippingInstructions: '', payMethod: ''
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };

        if (newInput.payMethod === "transferencia") {
            setPayment("transferencia");
        } else if (newInput.payMethod === "bizum") {
            setPayment("bizum");
        } else if (newInput.payMethod === "efectivo") {
            setPayment("efectivo");
        } else {
            setPayment('');
        }
        setInput(newInput);
    }

    const handlePickUp = (e) => {
        const { value, name } = e.target;
        const newPickUp = { ...input, [name]: value };
        if (newPickUp.pickUp === "si") {
            setPickUpLocal("si");
        } else if ((newPickUp.pickUp === "no")) {
            setPickUpLocal("no");
            swal('!Atencion Coquito!','Las tarifas y alcance de envio es aplicado segun la app GLOVO. Nosotros nos encargamos de solicitarlo por ti y enviarte tu pedido. El precio puede ser diferente si lo gestionas tu mismo.', 'warning');
        }
        setInput(newPickUp);
    }

    const handleDate = (e) => {
        const { value, name } = e.target;
        const newDate = { ...input, [name]: value };
        const today = new Date();
        const dateDelivery = new Date(newDate.deliveryDate);
        today.setDate(today.getDate() + 2);
        if (dateDelivery < today) {
            swal('Debes realizar el pedido con 48hs de anticipacion');
        } else {
            swal("Excelente!", "", "success")
        }
        setInput(newDate);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const newEmail = {
                buyerEmail: input.buyerEmail,
                buyerName: input.buyerName,
                buyerLastName: input.buyerLastName,
                buyerCelphone: input.buyerCelphone,
                deliveryDate: input.deliveryDate,
                deliveryHour: input.deliveryHour,
                pickUp: input.pickUp,
                payMethod: input.payMethod,
                sendPrice: envio,
                discount: ajuste, 
                productsList: cart.map((cartItem) => ({ productId: cartItem.product._id, quantity: cartItem.quantity }))
            }
            const newBuy = {
                buyerData: {
                    buyerEmail: input.buyerEmail,
                    buyerName: input.buyerName,
                    buyerLastName: input.buyerLastName,
                    buyerCelphone: input.buyerCelphone,
                },
                buyerConditions: {
                    deliveryDate: input.deliveryDate,
                    deliveryHour: input.deliveryHour,
                    pickUp: input.pickUp,
                    payMethod: input.payMethod,
                    discount:ajuste,
                },
                productsList: cart.map((cartItem) => ({ productId: cartItem.product._id, quantity: cartItem.quantity }))
            }
            const newDelivery = {
                buyerData: {
                    buyerEmail: input.buyerEmail,
                    buyerName: input.buyerName,
                    buyerLastName: input.buyerLastName,
                    buyerCelphone: input.buyerCelphone,
                },
                buyerConditions: {
                    deliveryDate: input.deliveryDate,
                    deliveryHour: input.deliveryHour,
                    pickUp: input.pickUp,
                    payMethod: input.payMethod,
                    discount:ajuste,
                },
                buyerShipping: {
                    buyerAddress1: input.buyerAddress1,
                    buyerAddress2: input.buyerAddress2,
                    buyerCity: input.buyerCity,
                    buyerState: input.buyerState,
                    buyerZip: input.buyerZip,
                    sendPrice: envio,
                    buyerShippingIntructions: input.buyerShippingInstructions,
                },
                productsList: cart.map((cartItem) => ({ productId: cartItem.product._id, quantity: cartItem.quantity }))
            }
            if (pickUpLocal === "si") {
                await axios.post('https://cocobackend.herokuapp.com/api/sales/', newBuy);
                console.log(newBuy)
                console.log(newEmail)
                swal({
                    title: "Compra Exitosa !",
                    icon: "success",
                }).then(() => {
                    axios.post('https://cocobackend.herokuapp.com/api/emails/', newEmail);
                    localStorage.removeItem('cart');
                    window.location.href = '/productos';
                    window.scrollTo(0, 150);
                });
            } else if (pickUpLocal === "no") {
                await axios.post('https://cocobackend.herokuapp.com/api/deliveries/', newDelivery);
                console.log(newEmail)
                console.log(newDelivery)
                swal({
                    title: "Compra Exitosa !",
                    icon: "success",
                }).then(() => {
                    axios.post('https://cocobackend.herokuapp.com/api/emails/', newEmail);
                    localStorage.removeItem('cart');
                    window.location.href = '/productos';
                    window.scrollTo(0, 150);
                });
            }


        } catch (error) {
            console.error(error);
            if (error.response.data) {
                swal("Faltan datos", "Completar los campos obligatorios", "warning");
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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="row row-cols-1">
                <h5 className="mt-2">Informacion del Contacto</h5>
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
                    <Form.Control type="text"
                        name="buyerCelphone"
                        onChange={(e) => handleChange(e)}
                        maxLength="40"
                        required
                    />
                </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom13">
                <label>¿Retira del local?</label>
                <Form.Select
                    className="col-11 col-md-9 text-center"
                    name="pickUp"
                    onChange={(e) => handlePickUp(e)}
                    defaultValue={'default'}
                    required>
                    <option value="default" disabled>Elije una opcion</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </Form.Select>
            </Form.Group>

            {pickUpLocal === "no" &&
                <div>
                    <ZipCode setEnvio={setEnvio} />

                    <h5 className="mt-2">Dirección de envio</h5>
                    <Form.Group className="mb-3" controlId="validationCustom05">
                        <FloatingLabel controlId="floatingAddress1" label="Dirección...Calle,Paseo...">
                            <Form.Control type="text"
                                name="buyerAddress1"
                                onChange={(e) => handleChange(e)}
                                maxLength="35"
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
                                maxLength="30"
                                required />

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
                                    maxLength="35"
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
                                    maxLength="35"
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">
                                Dato Requerido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <FloatingLabel controlId="floatingZip" label="Codigo Postal">
                                <Form.Control type="text"
                                    maxLength="8"
                                    name="buyerZip"
                                    onChange={(e) => handleChange(e)}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">
                                Dato Requerido
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="validationCustom02">
                        <h5 className="mt-2">Fecha de entrega</h5>
                        <Form.Text className="text-muted">
                            Haz tu pedido con 48 horas de anticipacion <b>¡Domingos No Entregamos!</b>
                        </Form.Text>
                        <Form.Control
                            type="date"
                            min={disablePastDate()}
                            name="deliveryDate"
                            onChange={(e) => handleDate(e)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Debes pedir con 2 dias de anticipacion
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="validationCustom20">
                        <h5 className="mt-2">Rango de entrega</h5>
                        <Form.Select
                            className="col-11 col-md-9 text-center"
                            name="deliveryHour"
                            onChange={(e) => handleChange(e)}
                            defaultValue={'default'}
                            required>
                            <option value="default" disabled>Elije una opcion</option>
                            <option value="9a11">9:00 am - 11:00 am</option>
                            <option value="11a13">11:00 am - 13:00 pm</option>
                            <option value="16a18">16:30 pm - 18:00 pm</option>
                            <option value="18a20">18:00 pm - 20:00 pm</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mt-2 mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Instrucciones de entrega</Form.Label>
                        <Form.Control as="textarea"
                            maxLength="80"
                            name="buyerShippingInstructions"
                            onChange={(e) => handleChange(e)}
                            rows={3} />
                    </Form.Group>

                    {/* Continuar Compra */}
                    <Accordion className="mb-2">
                        <Accordion.Item className="accordion-buy" eventKey="0">
                            <Accordion.Header>
                                Continuar
                            </Accordion.Header>
                            <Accordion.Body>
                                <h5>Pago</h5>
                                <Form.Group as={Col} controlId="validationCustom12" className='mb-2'>
                                    <label>¿Como Quiere Pagar?</label>
                                    <Form.Select
                                        className="col-11 col-md-9 text-center"
                                        name="payMethod"
                                        onChange={(e) => handleChange(e)}
                                        defaultValue={'default'}
                                        required>
                                        <option value="default" disabled>Elije una opcion</option>
                                        <option value="bizum">Bizum</option>
                                        <option value="transferencia">Trasnferencia</option>
                                    </Form.Select>
                                </Form.Group>
                                {payment === "bizum" &&
                                    <div>
                                        <h5>Envia un Bizum con Motivo "CocoMad Compra" al <b>+34635790277</b></h5>
                                        <p> Puedes enviarnos un mensaje para coordinar
                                            <a href="https://wa.me/c/34635790277" target="blank" >
                                                <FaWhatsappSquare className="wap-icon" />
                                            </a>
                                        </p>
                                    </div>
                                }
                                {payment === "transferencia" &&
                                    <div>
                                        <h5>Realiza la trasferencia bancaria con concepto: "CocoMad Compra" al IBAN: <b>ES17 0081 5244 9500 0184 0789</b></h5>
                                        <p> Puedes enviarnos un mensaje para coordinar
                                            <a href="https://wa.me/c/34635790277" target="blank" >
                                                <FaWhatsappSquare className="wap-icon" />
                                            </a>
                                        </p>
                                    </div>
                                }

                                {/* BOTON SUBMIT PARA COMPLETAR EL FORMULARIO*/}
                                <button className="boton-comprar" type="submit">
                                    Comprar
                                </button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            }
            {pickUpLocal === "si" &&
                <>
                    <Form.Group className="mb-3" controlId="validationCustom02">
                        <h5 className="mt-2">Fecha de retiro</h5>
                        <Form.Text className="text-muted">
                            Haz tu pedido con 48 horas de anticipacion <b>¡Domingos No Entregamos!</b>
                        </Form.Text>
                        <Form.Control
                            type="date"
                            min={disablePastDate()}
                            name="deliveryDate"
                            onChange={(e) => handleDate(e)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Debes pedir con 2 dias de anticipacion
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="validationCustom22">
                        <h5 className="mt-2">Rango de entrega</h5>
                        <Form.Select
                            className="col-11 col-md-9 text-center"
                            name="deliveryHour"
                            onChange={(e) => handleChange(e)}
                            defaultValue={'default'}
                            required>
                            <option value="default" disabled>Elije una opcion</option>
                            <option value="9a11">9:00 am - 11:00 am</option>
                            <option value="11a13">11:00 am - 13:00 pm</option>
                            <option value="16a18">16:30 pm - 18:00 pm</option>
                            <option value="18a20">18:00 pm - 20:00 pm</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Continuar Compra */}
                    <Accordion className="mb-2">
                        <Accordion.Item className="accordion-buy" eventKey="0">
                            <Accordion.Header>
                                Continuar
                            </Accordion.Header>
                            <Accordion.Body>
                                <h5>Pago</h5>
                                <Form.Group as={Col} controlId="validationCustom12" className='mb-2'>
                                    <label>¿Como Quiere Pagar?</label>
                                    <Form.Select
                                        className="col-11 col-md-9 text-center"
                                        name="payMethod"
                                        onChange={(e) => handleChange(e)}
                                        defaultValue={'default'}
                                        required>
                                        <option value="default" disabled>Elije una opcion</option>
                                        <option value="efectivo">Pagare el dia del retiro</option>
                                        <option value="bizum">Bizum Ahora</option>
                                        <option value="transferencia">Transferencia</option>
                                    </Form.Select>
                                </Form.Group>
                                {payment === "efectivo" &&
                                    <div>
                                        <h5>Eligiras el metodo de pago el dia que retires tu producto</h5>
                                        <p>TE ESPERAMOS !</p>
                                    </div>
                                }

                                {payment === "bizum" &&
                                    <div>
                                        <h5>Envia un Bizum con Motivo "CocoMad Compra" al <b>+34635790277</b> </h5>
                                        <p> Puedes enviarnos un mensaje para coordinar
                                            <a href="https://wa.me/c/34635790277" target="blank" >
                                                <FaWhatsappSquare className="wap-icon" />
                                            </a>
                                        </p>
                                    </div>
                                }
                                {payment === "transferencia" &&
                                    <div>
                                        <h5>Realiza la trasferencia bancaria con concepto: "CocoMad Compra" al IBAN: <b>ES17 0081 5244 9500 0184 0789</b></h5>
                                        <p> Puedes enviarnos un mensaje para coordinar
                                            <a href="https://wa.me/c/34635790277" target="blank" >
                                                <FaWhatsappSquare className="wap-icon" />
                                            </a>
                                        </p>
                                    </div>
                                }

                                {/* BOTON SUBMIT PARA COMPLETAR EL FORMULARIO*/}
                                <button className="boton-comprar" type="submit">
                                    Comprar
                                </button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </>
            }
        </Form>
    )
}