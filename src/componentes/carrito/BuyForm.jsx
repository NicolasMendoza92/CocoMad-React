
import React, { useState } from 'react'
import './cartStyles.css';
import { Button, Step, StepLabel, Stepper} from '@mui/material'
import { ContactForm } from './ContactForm';
import { PaymentForm } from './PaymentForm';
import { ShippingForm } from './ShippingForm';


export const BuyForm = ({ user, cart, setEnvio, envio, ajuste }) => {

    const stepClasses = ["Datos de Contacto","Datos de Envio", "Metodo de Pago"];
    const [activeStep, setActiveStep] = useState(0);
    
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
            <ContactForm user={user} setActiveStep={setActiveStep}/>
            </>
            }
            {(activeStep > 0 && activeStep <= 1) && 
            <>
            <ShippingForm user={user} cart={cart} setEnvio={setEnvio} envio={envio} ajuste={ajuste} setActiveStep={setActiveStep}/> 
            <div className='m-2 d-flex justify-content-around'>
            <Button onClick={backStep}>Atras</Button>
            </div>
            </>
            } 
            {activeStep >= 2 && 
            <>
            <PaymentForm/>
            <div className='m-2 d-flex justify-content-around'>
            <Button onClick={backStep}>Atras</Button>
            <Button disabled onClick={nextStep} className='d-none'>Siguiente</Button>
            </div>
            </>
            }            
        </>
    )
}