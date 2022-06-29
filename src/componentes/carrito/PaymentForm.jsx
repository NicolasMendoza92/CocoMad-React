
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { FaWhatsappSquare } from 'react-icons/fa'
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import { Form, Col } from 'react-bootstrap';
import { useState } from "react";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../utils/reducer";
import { SpinnerCM } from "../spinner/SpinnerCM";

export const PaymentForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);

    const [{ buyData }, dispatch] = useStateValue();

    const [input, setInput] = useState({ payMethod: '' });
    
    const [payment, setPayment] = useState('');

    const handleChangePay = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        if (newInput.payMethod === "WhatsApp") {
            setPayment("WhatsApp");
        } else if (newInput.payMethod === "Tarjeta") {
            setPayment("Tarjeta")
        }
        else {
            setPayment('');
        }
        setInput(newInput);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);

        const newSell = {
            payMethod: input.payMethod,
        };
        dispatch({
            type: actionTypes.SET_SHIPPINGDATA,
            buyData: newSell,
        });
        console.log(buyData)

        setValidated(true);
    }


    if (isLoading) {
        return (
            <SpinnerCM />
        );
    }

    // importar desde la API -  aca contectamos Stripe a react project. 
    const stripePromise = loadStripe("pk_test_51L03wdJW4asUB98JlYSwSbTVz2jcknEwstil9RLZrFdVzVy0BopCQicvKBtA8yEoWVAZUWVSGeTZ8wgCfgumynwi00iRE9BKgD");

    const CARD_ELEMENT_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                colorPrimary: '#0570de',
                colorBackground: '#ffffff',
                colorText: '#30313d',
                colorDanger: '#df1b41',
                fontFamily: 'Montserrat, sans-serif',
                spacingUnit: '2px',
                borderRadius: '4px',
            },
            invalid: {
                color: "#e5424d",
                ":focus": {
                    color: "#303238",
                },
            },
        },
    };

    const CheckoutForm = () => {

        const stripe = useStripe();
        // funcion que puede manipular lo que viene de stripe
        const elements = useElements();

        const validateCard = async (e) => {
            e.preventDefault();

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                // le digo a stripe que necestio que traiga - en este caso que traiga lo de CardElement del form
                card: elements.getElement(CardElement),
            });
            if (!error) {

                const { id } = paymentMethod;
                try {
                    await axios.post("http://localhost:4000/api/payment", id);
                    elements.getElement(CardElement).clear();

                } catch (error) {
                    console.log(error);
                }
            };
        }

        return <Form className='d-flex flex-column justify-content-center align-content-center' onSubmit={validateCard}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <button className='my-3 d-flex justify-content-center btn btn-success text-center'>
                Comprar
            </button>
        </Form>
    }
    return (
        <div className='container'>
            <h2 className='m-2 text-center'>¡Ya casi Terminamos!</h2>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="validationCustom12" className='mb-2'>
                    <label> <h4>Metodo de pago</h4></label>
                    <Form.Select
                        className="col-11 col-md-9 text-center"
                        name="payMethod"
                        onChange={(e) => handleChangePay(e)}
                        defaultValue={'default'}
                        required>
                        <option value="default" disabled>Elige una opción</option>
                        <option value="WhatsApp">Por WhatsApp</option>
                        <option value="Tarjeta">Con Tarjeta</option>
                    </Form.Select>
                </Form.Group>


                {payment === "WhatsApp" &&
                    <>
                        <div className='mb-2'>
                            <h5>Pago por WhatsApp</h5>
                            <p className='mb-0'> Envianos un mensaje para coordinar el pago
                                <a href="https://wa.me/c/34635790277" target="blank" >
                                    <FaWhatsappSquare className="wap-icon" />
                                </a>
                            </p>
                            <span style={{ color: "grey" }}>El pedido no se realizara hasta que el pago no haya sido finalizado. Recibirás un correo con los datos.</span>
                        </div>
                        <button type="submit" className="my-3 d-flex justify-content-center btn btn-success text-center" >Pedir</button>
                    </>
                }

                {payment === "Tarjeta" &&
                    <>
                        <div className='p-2 m-2'>

                            <h5>Pago por Tarjeta</h5>
                            <p>Coloca los datos de tu Tarjeta Credito/Debito</p>
                            <Elements stripe={stripePromise} className="m-2" >
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </>
                }

            </Form>
        </div>
    )
}
