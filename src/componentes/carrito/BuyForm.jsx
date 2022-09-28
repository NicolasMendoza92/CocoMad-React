
import React, { useState } from 'react'
import './cartStyles.css';
import { Button, Step, StepLabel, Stepper} from '@mui/material'
import { ContactForm } from './ContactForm';
import { PaymentForm } from './PaymentForm';
import { ShippingForm } from './ShippingForm';


export const BuyForm = ({ user, cart, setEnvio, envio, ajuste, totalAmount }) => {

    const stepClasses = ["Datos de Contacto","Datos de Envio", "Metodo de Pago"];
    const [activeStep, setActiveStep] = useState(0);
    const [pickUpLocal, setPickUpLocal] = useState('');
    
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
            <ContactForm user={user} setActiveStep={setActiveStep} setPickUpLocal={setPickUpLocal} setEnvio={setEnvio}/>
            </>
            }
            {(activeStep > 0 && activeStep <= 1) && 
            <>
            <ShippingForm user={user} cart={cart} setEnvio={setEnvio} envio={envio} ajuste={ajuste} setActiveStep={setActiveStep} pickUpLocal={pickUpLocal} /> 
            <div className='m-2 d-flex justify-content-around'>
            <Button onClick={backStep}>Atras</Button>
            </div>
            </>
            } 
            {activeStep >= 2 && 
            <>
            <PaymentForm totalAmount={totalAmount}/>
            <div className='m-2 d-flex justify-content-around'>
            <Button onClick={backStep}>Atras</Button>
            <Button disabled onClick={nextStep} className='d-none'>Siguiente</Button>
            </div>
            </>
            }            
        </>
    )
}