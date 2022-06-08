
import React, { useState } from 'react'
import './cartStyles.css';
import { Button, Step, StepLabel, Stepper} from '@mui/material'
import { ShippingForm } from './ShippingForm';
import { PaymentForm } from './PaymentForm';


export const BuyForm = ({ user, cart, setEnvio, envio, ajuste }) => {

    const stepClasses = ["Datos de Contacto", "Metodo de Pago"];
    const [activeStep, setActiveStep] = useState(0);
    const [payment, setPayment] = useState('');

    // cambia el nro del stepActive cuando hago click , cuando llame a la fn  me suma/resta en uno
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    return (
        <>
            <Stepper activeStep={activeStep} alternativeLabel>
                {stepClasses.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep <= 0 && 
            <>
           
            <ShippingForm user={user} cart={cart} setEnvio={setEnvio} envio={envio} ajuste={ajuste} payment={payment} setPayment={setPayment} setActiveStep={setActiveStep}/>
            <div className='m-2 d-flex justify-content-around'>
            <Button disabled onClick={backStep} className='btn btn-disabled'>Atras</Button>
            <Button onClick={nextStep}>Siguiente</Button>
            </div>
            </>
            }
            {activeStep >= 1 && 
            <>
            <PaymentForm payment={payment}/>
            <div className='m-2 d-flex justify-content-around'>
            <Button onClick={backStep}>Atras</Button>
            <Button disabled onClick={nextStep} className='d-none'>Siguiente</Button>
            </div>
            </>
            }            
        </>
    )
}