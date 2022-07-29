
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState } from "react";
import { SpinnerCM } from "../spinner/SpinnerCM";
import swal from "sweetalert";

export const PaymentForm = () => {

    const [isLoading, setIsLoading] = useState(false);

    // const [payment, setPayment] = useState('');

  
    const moveToWhatsApp = () => {
        swal({
            title: "Coordinaras el pago por WhatsApp... ¿Estas de acuerdo?",
            icon: "warning",
            buttons: true,
            succesMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    whatsApp();
                } else {
                    swal("Excelente! Continua con el pago");
                }
            });
    }

    const whatsApp = async () => {
        swal("Perfecto, vamos a coordinar tu pago por WhatsApp.")
        setIsLoading(true)
        .then((value) => {
            const newWindow = window.open('https://wa.me/c/34635790277');
            if (newWindow) newWindow.opener = null
        });
        setIsLoading(false)
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

        return <form className='d-flex flex-column justify-content-center align-content-center' onSubmit={validateCard}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <button className='my-3 d-flex justify-content-center btn btn-success text-center'>
                Comprar
            </button>
        </form>
    }

    return (
        <div className='container'>
            <h2 className='m-2 text-center'>¡Ya casi Terminamos!</h2>
            <div className="p-2 d-flex flex-column">
                <div className='p-2 m-2'>

                    <h5>Pago por Tarjeta</h5>
                    <p>Coloca los datos de tu Tarjeta Credito/Debito</p>
                    <Elements stripe={stripePromise} className="m-2" >
                        <CheckoutForm />
                    </Elements>
                </div>


                <Button onClick={moveToWhatsApp} className="m-2 btn btn-success" >Coorindar por WhatsApp</Button>
            </div>
        </div>
    )
}
