import axios from 'axios'
import React, { useState } from 'react'
import { Accordion, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { FaWhatsappSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { leerDeLocalStorage } from '../../utils/localStorage'
import { ZipCode } from './ZipCode'

export const BuyForm = ({ user, cart, setEnvio }) => {

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
        buyerLastName: user.lastName, buyerAddress1: '', buyerAddress2: '', buyerCity: '',
        buyerState: '', buyerZip: '', deliveryDate: '', pickUp: '', buyerShippingInstructions: '', buyerCardNumber: '',
        buyerCardName: '', buyerCardDate: '', buyerCardCode: '', payMethod: '',
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        if (newInput.payMethod === "tarjeta") {
            setPayment("tarjeta")
        } else if (newInput.payMethod === "bizum") {
            setPayment("bizum")
        } else if (newInput.payMethod === "transferencia") {
            setPayment("transferencia")
        }
        else {
            setPayment("efectivo")
        }
        setInput(newInput);
    }

    const handlePickUp = (e) => {
        const { value, name } = e.target;
        const newPickUp = { ...input, [name]: value };
        if (newPickUp.pickUp === "si") {
            setPickUpLocal("si");
        } else if ((newPickUp.pickUp === "no")) {
            setPickUpLocal("no")
            swal('Las tarifas y alcance de envio es aplicado segun la app GLOVO')
        }
        setInput(newPickUp);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const newBuy = {
                buyerData: {
                    buyerEmail: input.buyerEmail,
                    buyerName: input.buyerName,
                    buyerLastName: input.buyerLastName,
                },
                buyerShipping: {
                    buyerAddress1: input.buyerAddress1,
                    buyerAddress2: input.buyerAddress2,
                    buyerCity: input.buyerCity,
                    buyerState: input.buyerState,
                    buyerZip: input.buyerZip,
                    deliveryDate: input.deliveryDate,
                    pickUp: input.pickUp,
                    buyerShippingIntructions: input.buyerShippingInstructions,
                },
                buyerCard: {
                    payMethod: input.payMethod,
                    buyerCardNumber: input.buyerCardNumber,
                    buyerCardCode: input.buyerCardCode,
                    buyerCardName: input.buyerCardName,
                    buyerCardDate: input.buyerCardDate,
                },
                productsList: cart.map((cartItem) => ({ productId: cartItem.product._id, quantity: cartItem.quantity }))

            }
            await axios.post('https://cocobackend.herokuapp.com/api/sales/', newBuy);

            swal({
                title: "Compra Exitosa !",
                icon: "success",
            }).then(() => {
                localStorage.removeItem('cart');
                window.location.href = '/productos';
                window.scrollTo(0, 150);
            });

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

    const scrollToTop = () => {
        window.scrollTo(0, 150);
    };



    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="row row-cols-1">
                {
                    !tokenLocal.token
                    &&
                    <Link to='/login' onClick={scrollToTop} className="my-3 text-decoration-none text-secondary text-center">
                        ¿Ya tiene una cuenta? Iniciar sesión
                    </Link>
                }
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
            <Form.Group as={Col} controlId="validationCustom13">
                <label>¿Retira del local?</label>
                <Form.Select
                    className="col-11 col-md-9 text-center"
                    name="pickUp"
                    onChange={(e) => handlePickUp(e)}
                    required>
                    <option value="" disabled selected={"Elije una Opcion"}>Elije una opcion</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </Form.Select>
            </Form.Group>

            {pickUpLocal === "no" &&
                <div>
                    <ZipCode setEnvio={setEnvio}/>
                    
                    <h5 className="mt-2">Dirección de envio</h5>
                    <Form.Group className="mb-3" controlId="validationCustom05">
                        <FloatingLabel controlId="floatingAddress1" label="Dirección...">
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
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Debes pedir con 2 dias de anticipacion
                        </Form.Control.Feedback>
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
                                        required>
                                        <option value="" disabled selected={"Elije una Opcion"}>Elije una opcion</option>
                                        <option value="bizum">Bizum</option>
                                        <option value="transferencia">Trasnferencia</option>
                                        <option value="tarjeta">Tarjeta</option>
                                    </Form.Select>
                                </Form.Group>
                                {payment === "tarjeta" &&
                                    <div>
                                        <Form.Text className="text-muted mb-1">
                                            Todas las transacciones son seguras y encriptadas.
                                        </Form.Text>
                                        <Form.Group className="mb-3" controlId="validationCustom07">
                                            <FloatingLabel controlId="floatingCardNumber" label="Numero de Tarjeta">
                                                <Form.Control type="text" minLength="16" maxLength="19"
                                                    name="buyerCardNumber"
                                                    onChange={(e) => handleChange(e)}
                                                    required />
                                            </FloatingLabel>
                                            <Form.Control.Feedback type="invalid">
                                                Por Favor complete los datos de la tarjeta
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="validationCustom08">
                                            <FloatingLabel controlId="floatingCardName" label="Nombre Tarjeta">
                                                <Form.Control type="text"
                                                    maxLength="20"
                                                    name="buyerCardName"
                                                    onChange={(e) => handleChange(e)}
                                                    required />
                                            </FloatingLabel>
                                            <Form.Control.Feedback type="invalid">
                                                Por Favor complete los datos de la tarjeta
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="validationCustom10">
                                                <FloatingLabel controlId="floatingCardDate" label="Vencimiento (MM/YY)">
                                                    <Form.Control type="text" minLength="5" maxLength="5"
                                                        name="buyerCardDate"
                                                        onChange={(e) => handleChange(e)}
                                                        required />
                                                </FloatingLabel>
                                                <Form.Control.Feedback type="invalid">
                                                    Fecha de Vencimiento Necesaria
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="validationCustom11">
                                                <FloatingLabel controlId="floatingCardCode" label="Codigo de seguridad">
                                                    <Form.Control type="password" maxLength="3" minLength="3"
                                                        name="buyerCardCode"
                                                        onChange={(e) => handleChange(e)}
                                                        required />
                                                </FloatingLabel>
                                                <Form.Control.Feedback type="invalid">
                                                    Fecha de Vencimiento Necesaria
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                    </div>
                                }

                                {payment === "bizum" &&
                                    <div>
                                        <h5>Envia un Bizum con Motivo "CocoMad Compra" al <b>+34635790277</b></h5>
                                        <p> Puedes enviarnos un mensaje si deseas
                                            <a href="https://wa.me/c/34635790277" target="blank" >
                                                <FaWhatsappSquare className="wap-icon" />
                                            </a>
                                        </p>
                                    </div>
                                }
                                {payment === "transferencia" &&
                                    <div>
                                        <h5>Realiza la trasferencia bancaria con concepto: "CocoMad Compra" al IBAN <b>XXXXX</b></h5>
                                        <p> Puedes enviarnos un mensaje si deseas
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
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Debes pedir con 2 dias de anticipacion
                        </Form.Control.Feedback>
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
                                        required>
                                        <option value="" disabled selected={"Elije una Opcion"}>Elije una opcion</option>
                                        <option value="efectivo">Pagare el dia del retiro</option>
                                        <option value="bizum">Bizum Ahora</option>
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
                                        <p> Puedes enviarnos un mensaje si deseas
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