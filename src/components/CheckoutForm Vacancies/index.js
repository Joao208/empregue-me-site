import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import api from "../../services/api";
import './style.css'
import { toast } from "react-toastify";

export default function CheckoutForm({description,avatar,salary,cargo,employment,city,uf,title}) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
  async function Pay(){
    try {
      const response = await api.post("/payment-intent")
          
      setClientSecret(response.data.clientSecret)
      console.log(response.data.clientSecret)

    } catch (error) {
      console.log(error)
    }
    }
    Pay()
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: ev.target.name.value
        }
      }
    });
      try {
        const data = new FormData()
  
        data.append('avatar', avatar)
        data.append('salary', salary)
        data.append('city', city)
        data.append('cargo', cargo)
        data.append('employment', employment)
        data.append('uf', uf)
        data.append('description', description)
        data.append('title', title)
  
        await api.post('/vacancies', data)
  
        toast.success('Postado ;)')
      } catch (e) {
        toast.error('Ops!! Imagem invalida');
      }
      if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="buttonpay"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Postar por R$50,00"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Pagamento bem sucedido, anúncio publicado.
      </p>
    </form>
  );
}