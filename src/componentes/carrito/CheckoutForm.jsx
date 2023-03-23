
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../utils/reducer';


const CheckoutForm = ({ totalAmount }) => {

  const [{ paymentMessage }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
      base: {
        iconColor: "rgb(240, 57, 122)",
        color: "#333",
        fontSize: "18px",
        "::placeholder": {
          color: "#ccc",
        },
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238",
        },
      },
    },
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // si la tarjeta es valida entonces -->
    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/payment/",
          {
            id,
            amount: totalAmount,
          }
        );

        console.log(data);
        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message,
        });
        console.log(paymentMessage);
        if (data.message === "Successful Payment") {
          dispatch({
            type: actionTypes.EMPTY_BASKET,
            basket: [],
          });
        }

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className='d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <Button className="m-2 p-2 btn btn-success" type='submit'>Pagar</Button>
    </form>
  );
};

export default CheckoutForm;