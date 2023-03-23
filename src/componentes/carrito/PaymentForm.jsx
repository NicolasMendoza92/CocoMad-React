
import { Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from 'react-bootstrap';
import { useState } from "react";
import { SpinnerCM } from "../spinner/SpinnerCM";
import swal from "sweetalert";
import CheckoutForm from "./CheckoutForm";

export const PaymentForm = ({totalAmount}) => {

    const [isLoading, setIsLoading] = useState(false);
  
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


    return (
        <div className='container'>
            <h2 className='m-2 text-center'>¡Ya casi Terminamos!</h2>
            <div className="p-2 d-flex flex-column text-center">
                <div className='p-2 m-2'>
                    <h5>Pago por Tarjeta</h5>
                    <p>Coloca los datos de tu tarjeta Credito/Debito</p>
                    <Elements stripe={stripePromise} className="m-2" >
                        <CheckoutForm totalAmount={totalAmount} />
                    </Elements>
                </div>
                <Button onClick={moveToWhatsApp} className="m-2 btn btn-secondary" >Coorindar por WhatsApp</Button>
            </div>
        </div>
    )
}
