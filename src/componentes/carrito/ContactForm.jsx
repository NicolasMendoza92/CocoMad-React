
import React, { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import './cartStyles.css';
import { leerDeLocalStorage } from '../../utils/localStorage'
import { SpinnerCM } from '../spinner/SpinnerCM'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../utils/reducer'
import swal from 'sweetalert'
import axios from 'axios';
import { Box, Modal} from '@mui/material';
import { FaTruck } from 'react-icons/fa';
import { AiFillShop } from 'react-icons/ai';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ContactForm = ({ user, setActiveStep, setPickUpLocal, setEnvio }) => {
    const tokenLocal = leerDeLocalStorage('token') || {};
    const [isLoading, setIsLoading] = useState(false);

    const [{ buyerData }, dispatch] = useStateValue();

    // Abre el modal del envio
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    const deliveryHome = () => {
        swal('!Atención Coquito!', 'Las tarifas y alcance de envio es aplicado segun la app GLOVO. Nosotros nos encargamos de solicitarlo por ti y enviarte tu pedido. El precio puede ser diferente si lo gestionas tu mismo.', 'warning');
        setPickUpLocal('no');
        setActiveStep(1)
    }

    const pickUpStore = () => {
        setPickUpLocal('si');
        setEnvio(0);
        setActiveStep(1)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);
        try {
            const contactData = {
                buyerEmail: input.buyerEmail,
                buyerName: input.buyerName,
                buyerLastName: input.buyerLastName,
                buyerCelphone: input.buyerCelphone,
            }
            await axios.post('http://localhost:4000/api/contact/', contactData);
            console.log(contactData)
            dispatch({
                type: actionTypes.SET_CONTACTDATA,
                buyerData: contactData,
            });
            console.log(buyerData)
            setValidated(true);
            handleOpen();
        } catch (error) {
            if (error.response.data) {
                swal(JSON.stringify(error.response.data))
            } else {
                alert('error de conexion')
            }
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>                
                        <div className='d-flex flex-column justify-content-center m-4 '>
                            <button onClick={pickUpStore} className='btn-delivery m-2'><AiFillShop className='delivery-icon' />Recoge en tienda </button>
                            <button onClick={deliveryHome} className='btn-delivery m-2'><FaTruck className='delivery-icon' />Entrega a domicilio</button>
                        </div>
                </Box>
            </Modal>
        </div>
    )
}