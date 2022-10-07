import axios from 'axios'
import React, { useState } from 'react'
import { Accordion, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { FaWhatsappSquare } from 'react-icons/fa'
import swal from 'sweetalert'
import './cartStyles.css';
import { leerDeLocalStorage } from '../../utils/localStorage'
import { SpinnerCM } from '../spinner/SpinnerCM'
import { ZipCode } from './ZipCode'


export const BuyForm = ({ user, cart, setEnvio, envio, ajuste, totalAmount}) => {

    const tokenLocal = leerDeLocalStorage('token') || {};
    const[isLoading, setIsLoading] = useState(false);

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

        if (newInput.payMethod === "WhatsApp") {
            setPayment("WhatsApp");
        } 
        else {
            setPayment('');
        }
        setInput(newInput);
    }

    const handlePickUp = (e) => {
        const { value, name } = e.target;
        const newPickUp = { ...input, [name]: value };
        if (newPickUp.pickUp === "si") {
            setPickUpLocal("si");
            setEnvio('');
        } else if ((newPickUp.pickUp === "no")) {
            setPickUpLocal("no");
            swal('!Atención Coquito!','Las tarifas y alcance de envio es aplicado segun la app GLOVO. Nosotros nos encargamos de solicitarlo por ti y enviarte tu pedido. El precio puede ser diferente si lo gestionas tu mismo.', 'warning');
        } 
        setInput(newPickUp);
    }

    const handleDate = (e) => {
        const { value, name } = e.target;
        const newDate = { ...input, [name]: value };
        const today = new Date();
        const dateDelivery = new Date(newDate.deliveryDate);
        today.setDate(today.getDate() + 2);
        // console.log(dateDelivery.toDateString())
        if (dateDelivery < today) {
            swal('Debes realizar el pedido con 48hs de anticipación, por favor selecciona otra fecha.');
        } else if(dateDelivery.toDateString().includes('Sun')){
            swal('¡ATENCIÓN! Domingos no entregamos. Por favor selecciona otra fecha.')
        }
         else {
            swal("Excelente!", "", "success")
        }
        setInput(newDate);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);
        try {
            const newEmail = {
                buyerEmail: input.buyerEmail,
                buyerName: input.buyerName,
                buyerLastName: input.buyerLastName,
                deliveryDate: input.deliveryDate,
                deliveryHour: input.deliveryHour,
                pickUp: input.pickUp,
                payMethod: input.payMethod,
                sendPrice: envio,
                discount: ajuste, 
                totalPurchase:totalAmount, 
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
                await axios.post('https://cocobackend.herokuapp.com/api/emails/', newEmail);
                console.log(newEmail)
                
                swal({
                    title: "Pedido Exitoso !",
                    icon: "success",
                }).then(() => {
                    localStorage.removeItem('cart');
                    window.location.href = '/productos';
                    window.scrollTo(0, 150);
                });
            } else if (pickUpLocal === "no") {
                await axios.post('https://cocobackend.herokuapp.com/api/deliveries/', newDelivery);
                await axios.post('https://cocobackend.herokuapp.com/api/emails/', newEmail);
                console.log(newEmail)
                
                swal({
                    title: "Pedido Exitoso !",
                    icon: "success",
             
                }).then(() => {                 
                    localStorage.removeItem('cart');
                    window.location.href = '/productos';
                    window.scrollTo(0, 150);
                });
            }


        } catch (error) {
            console.error(error);
            if (error.response.data) {
                swal(JSON.stringify(error.response.data));
                setIsLoading(false);
            } else {
                alert('error de conexion')
            }
        }

        setValidated(true);
        if (setValidated === true) {
            e.target.reset();
        }

    }

    if (isLoading) {
        return (
          <SpinnerCM />
        );
      }




    return (
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
            <Form.Group as={Col} controlId="validationCustom13">
                <label><b>¿Recoge en Tienda?</b></label>
                <Form.Select
                    className="col-11 col-md-9 text-center"
                    name="pickUp"
                    onChange={(e) => handlePickUp(e)}
                    defaultValue={'default'}
                    required>
                    <option value="default" disabled>Elige una opción</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </Form.Select>
            </Form.Group>

            {pickUpLocal === "no" &&
                <div>
                    <ZipCode setEnvio={setEnvio} />

                    <h5 className="mt-2">Dirección de envío</h5>
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
                                maxLength="35"
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

                    <Form.Group className="mb-3" controlId="validationCustom02">
                        <h4 className="mt-2">Fecha de entrega</h4>
                        <Form.Text className="text-muted">
                            Haz tu pedido con 48 horas de anticipación <b>¡Domingos No Entregamos!</b>
                        </Form.Text>
                        <Form.Control
                            type="date"
                            min={disablePastDate()}
                            name="deliveryDate"
                            onChange={(e) => handleDate(e)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Debes pedir con 2 dias de anticipación
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="validationCustom20">
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
                                <Form.Group as={Col} controlId="validationCustom12" className='mb-2'>
                                    <label> <h4>Coordinar el pago</h4></label>
                                    <Form.Select
                                        className="col-11 col-md-9 text-center"
                                        name="payMethod"
                                        onChange={(e) => handleChange(e)}
                                        defaultValue={'default'}
                                        required>
                                        <option value="default" disabled>Elige una opción</option>
                                        <option value="WhatsApp">Por WhatsApp</option>
                                    </Form.Select>
                                </Form.Group>
                                {payment === "WhatsApp" &&
                                    <div className='mb-2'>
                                        <h5>Ya casi Terminamos!</h5>
                                        <p className='mb-0'> Envianos un mensaje 
                                            <a href="https://wa.me/c/34635790277" target="blank" >
                                                <FaWhatsappSquare className="wap-icon" />
                                            </a>
                                        </p>
                                        <span style={{color: "grey"}}>Luego de hacer tu pedido, recibirás un correo con los datos.</span>
                                    </div>
                                }

                                {/* BOTON SUBMIT PARA COMPLETAR EL FORMULARIO*/}
                                <div className='d-flex justify-content-center'>
                                <button className="boton-comprar" type="submit">
                                    Solicitar Pedido
                                </button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            }
            {pickUpLocal === "si" &&
                <>
                    <Form.Group className="mb-3" controlId="validationCustom02">
                        <h4 className="mt-2">Fecha de retiro</h4>
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

                    {/* Continuar Compra */}
                    <Accordion className="mb-2">
                        <Accordion.Item className="accordion-buy" eventKey="0">
                            <Accordion.Header>
                                Continuar
                            </Accordion.Header>
                            <Accordion.Body>
                            <Form.Group as={Col} controlId="validationCustom12" className='mb-2'>
                            <label> <h4>Coordinar el pago</h4></label>
                                    <Form.Select
                                        className="col-11 col-md-9 text-center"
                                        name="payMethod"
                                        onChange={(e) => handleChange(e)}
                                        defaultValue={'default'}
                                        required>
                                        <option value="default" disabled>Elige una opción</option>
                                        <option value="WhatsApp">Por WhatsApp</option>
                                    </Form.Select>
                                </Form.Group>
                                {payment === "WhatsApp" &&
                                    <div className='mb-2'>
                                        <h5>Ya casi Terminamos!</h5>
                                        <p className='mb-0'> Envianos un mensaje 
                                            <a href="https://wa.me/c/34635790277" target="blank" >
                                                <FaWhatsappSquare className="wap-icon" />
                                            </a>
                                        </p>
                                        <span style={{color: "grey"}}>Luego de hacer tu pedido, recibirás un correo con los datos.</span>
                                    </div>
                                }

                                {/* BOTON SUBMIT PARA COMPLETAR EL FORMULARIO*/}
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                <button className="boton-comprar" type="submit">
                                    Solicitar Pedido
                                </button>
                                
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </>
            }
        </Form>
    )
}